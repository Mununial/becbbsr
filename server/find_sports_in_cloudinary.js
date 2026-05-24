const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function findSports() {
  try {
    console.log("Searching all resources in Cloudinary...");
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500 // search up to 500 resources!
    });
    
    console.log(`Total resources found: ${result.resources.length}`);
    
    const sportsKeywords = ['20230121', '20230120', '20230119', 'whatsapp', 'cricket', 'football', 'sports', 'game', 'play', 'match', 'spirit', 'atheletics'];
    const matched = [];
    
    result.resources.forEach(r => {
      const name = r.public_id.toLowerCase();
      const isSportsMatch = sportsKeywords.some(keyword => name.includes(keyword));
      
      if (isSportsMatch) {
        matched.push({
          public_id: r.public_id,
          secure_url: r.secure_url,
          created_at: r.created_at
        });
      }
    });
    
    console.log(`Found ${matched.length} matched sports resources in Cloudinary:`);
    matched.forEach((m, i) => {
      console.log(`${i+1}. PublicID: ${m.public_id} -> ${m.secure_url}`);
    });
    
  } catch (err) {
    console.error("Error:", err.message);
  }
}

findSports();
