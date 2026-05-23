const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, 'migration_results.json');
const SRC_DIR = path.join(__dirname, '../client/src');
const PUBLIC_DIR = path.join(__dirname, '../client/public');

if (!fs.existsSync(resultsPath)) {
  console.error('Migration results not found.');
  process.exit(1);
}

const migrationLog = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
const successMap = migrationLog.filter(item => item.status === 'success');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

// 1. Update references in code
console.log('Updating references in source code...');
walk(SRC_DIR, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    successMap.forEach(item => {
      // Create regex for the local path (e.g., /leadership/campus_bg.jpg)
      // We escape the dots and slashes
      const escapedPath = item.local.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Look for the path in quotes or as a background-image URL
      // (['"])/leadership/campus_bg\.jpg(['"])
      const regex = new RegExp(`(['"])${escapedPath}(['"])`, 'g');
      
      if (regex.test(content)) {
        content = content.replace(regex, `$1${item.remote}$2`);
        modified = true;
      }
      
      // Also check for 'url(/leadership/campus_bg.jpg)' style (CSS)
      const cssRegex = new RegExp(`url\\(\\s*['"]?${escapedPath}['"]?\\s*\\)`, 'g');
      if (cssRegex.test(content)) {
        content = content.replace(cssRegex, `url(${item.remote})`);
        modified = true;
      }

      // Special case for paths like campus_bg.jpg without leading slash if used in some contexts
      const noSlashPath = item.local.startsWith('/') ? item.local.substring(1) : item.local;
      const escapedNoSlash = noSlashPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regexNoSlash = new RegExp(`(['"])${escapedNoSlash}(['"])`, 'g');
      if (regexNoSlash.test(content)) {
        content = content.replace(regexNoSlash, `$1${item.remote}$2`);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${path.relative(SRC_DIR, filePath)}`);
    }
  }
});

// 2. Delete local files
console.log('Deleting local files...');
successMap.forEach(item => {
  const filePath = path.join(PUBLIC_DIR, item.local);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${item.local}`);
    } catch (e) {
      console.error(`Failed to delete ${item.local}:`, e.message);
    }
  }
});

console.log('All done!');
