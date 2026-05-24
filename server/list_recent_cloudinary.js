const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function listRecent() {
  try {
    console.log("Listing recent uploads in Cloudinary...");
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 50,
      direction: 'desc', // get most recent first!
      sort_by: 'created_at'
    });
    
    console.log(`Total recent resources: ${result.resources.length}`);
    result.resources.forEach((r, i) => {
      console.log(`${i+1}. PublicID: ${r.public_id} | Created: ${r.created_at} | Size: ${(r.bytes/1024).toFixed(1)} KB\n   URL: ${r.secure_url}`);
    });
    
  } catch (err) {
    console.error("Error:", err.message);
  }
}

listRecent();
