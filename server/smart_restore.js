const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function smartRestore() {
  try {
    console.log("Starting Smart Restore from bec_web_assets folder only...");
    
    // Fetch resources only from the 'bec_web_assets/' folder
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'bec_web_assets/',
      max_results: 100
    });
    
    console.log(`Found ${result.resources.length} real photos in bec_web_assets.`);
    
    const workshopImages = [];
    const galleryImages = [];
    const sportsImages = [];
    
    result.resources.forEach((resource, index) => {
      // Exclude tiny files or other anomalies (all files in bec_web_assets are real images)
      if (resource.bytes > 5000) {
        const extractedFilename = resource.public_id.split('/').pop() || 'Event';
        const entry = {
          id: String(Date.now() - index * 1000),
          title: extractedFilename.replace(/_/g, ' ').replace(/-/g, ' ').toUpperCase(),
          photo: resource.secure_url,
          desc: "Bhubaneswar Engineering College highlights and campus moments.",
          date: new Date(resource.created_at).toISOString().split('T')[0],
          category: "Campus"
        };
        
        // Evenly distribute the 36 real photos into the three galleries (12 each!)
        if (index % 3 === 0) {
          workshopImages.push(entry);
        } else if (index % 3 === 1) {
          galleryImages.push(entry);
        } else {
          sportsImages.push(entry);
        }
      }
    });
    
    // Save to server JSON databases
    fs.writeFileSync(path.join(__dirname, 'workshop.json'), JSON.stringify(workshopImages, null, 2));
    fs.writeFileSync(path.join(__dirname, 'gallery.json'), JSON.stringify(galleryImages, null, 2));
    fs.writeFileSync(path.join(__dirname, 'sports.json'), JSON.stringify(sportsImages, null, 2));
    
    console.log(`Restoration complete!`);
    console.log(`- Restored ${workshopImages.length} real photos to workshop.json`);
    console.log(`- Restored ${galleryImages.length} real photos to gallery.json`);
    console.log(`- Restored ${sportsImages.length} real photos to sports.json`);
    
  } catch (error) {
    console.error("Error in Smart Restore:", error.message);
  }
}

smartRestore();
