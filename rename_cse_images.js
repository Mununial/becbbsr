const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'client', 'public', 'facilities', 'CSE');
fs.readdir(dir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  // Filter for image files
  const imageFiles = files.filter(file => file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg'));
  
  // Sort files to make renaming consistent
  imageFiles.sort();

  imageFiles.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `cse_${index + 1}${ext}`;
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, newName);
    
    fs.rename(oldPath, newPath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming ${file} to ${newName}:`, renameErr);
      } else {
        console.log(`Renamed: ${file} -> ${newName}`);
      }
    });
  });
});
