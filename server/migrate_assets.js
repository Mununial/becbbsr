const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const PUBLIC_DIR = path.join(__dirname, '../client/public');
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (allowedExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

async function migrate() {
  const allImages = getFiles(PUBLIC_DIR);
  const migrationLog = [];
  
  console.log(`Found ${allImages.length} images to migrate.`);

  for (const filePath of allImages) {
    // Relative path for the key (e.g., /leadership/campus_bg.jpg)
    const relativePath = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');
    const displayPath = '/' + relativePath;
    
    // Skip small icons or specific system files if needed, but let's upload all per user request
    
    try {
      console.log(`Uploading: ${displayPath}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'becweb',
        use_filename: true,
        unique_filename: false,
        overwrite: true
      });
      
      migrationLog.push({
        local: displayPath,
        remote: result.secure_url,
        status: 'success'
      });
      console.log(`Done: ${result.secure_url}`);
    } catch (error) {
      console.error(`Failed to upload ${displayPath}:`, error.message);
      migrationLog.push({
        local: displayPath,
        status: 'failed',
        error: error.message
      });
    }
  }

  fs.writeFileSync(path.join(__dirname, 'migration_results.json'), JSON.stringify(migrationLog, null, 2));
  console.log('Migration finished. Results saved to migration_results.json');
}

migrate();
