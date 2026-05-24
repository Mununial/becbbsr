const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function findVideos() {
  try {
    console.log("Searching all video assets in Cloudinary...");
    const result = await cloudinary.api.resources({
      resource_type: 'video', // search specifically for videos!
      type: 'upload',
      max_results: 100
    });
    
    console.log(`Total video resources found: ${result.resources.length}`);
    result.resources.forEach((r, i) => {
      console.log(`${i+1}. PublicID: ${r.public_id} | Created: ${r.created_at} | Size: ${(r.bytes/(1024*1024)).toFixed(2)} MB | URL: ${r.secure_url}`);
    });
    
  } catch (err) {
    console.error("Error finding videos:", err.message);
  }
}

findVideos();
