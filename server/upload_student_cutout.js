const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const filePath = path.join(__dirname, '../client/public/student_hero_cutout.png');
console.log("Uploading local student cutout file: " + filePath);

cloudinary.uploader.upload(filePath, {
  folder: 'becweb',
  public_id: 'student_hero_cutout',
  overwrite: true,
  resource_type: 'image'
})
.then(result => {
  console.log("SUCCESS! File uploaded successfully to Cloudinary.");
  console.log("Cloudinary Absolute URL: " + result.secure_url);
})
.catch(err => {
  console.error("UPLOAD FAILED:", err);
});
