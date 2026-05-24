const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function listFolder() {
  try {
    console.log("Listing files in bec_web_assets folder...");
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'bec_web_assets/', // search specifically in bec_web_assets
      max_results: 100
    });
    
    console.log(`Total resources in bec_web_assets: ${result.resources.length}`);
    result.resources.forEach((r, i) => {
      console.log(`${i+1}. PublicID: ${r.public_id} | Created: ${r.created_at} | Size: ${(r.bytes/1024).toFixed(1)} KB | URL: ${r.secure_url}`);
    });
    
  } catch (err) {
    console.error("Error:", err.message);
  }
}

listFolder();
