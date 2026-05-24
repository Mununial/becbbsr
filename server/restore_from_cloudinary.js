const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function restore() {
  try {
    console.log("Connecting to Cloudinary: " + process.env.CLOUDINARY_CLOUD_NAME);
    
    // Fetch all resources uploaded in the account
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 100
    });
    
    console.log(`Found ${result.resources.length} uploaded files in Cloudinary.`);
    
    const workshopImages = [];
    const galleryImages = [];
    const sportsImages = [];
    
    result.resources.forEach((resource, index) => {
      console.log(`Resource ${index + 1}: ${resource.secure_url} (Folder: ${resource.folder || 'none'})`);
      
      // Filter out small logos, only include real photos
      if (resource.bytes > 15000 && !resource.secure_url.includes('logo') && !resource.secure_url.includes('aicte') && !resource.secure_url.includes('bput')) {
        const extractedFilename = (resource.public_id.split('/').pop() || 'Event');
        // Create database entries
        const entry = {
          id: String(Date.now() - index * 1000), // unique timestamp IDs
          title: extractedFilename.replace(/_/g, ' ').replace(/-/g, ' ').toUpperCase(),
          photo: resource.secure_url,
          desc: "BEC Event highlights and student activities.",
          date: new Date(resource.created_at).toISOString().split('T')[0],
          category: "Event"
        };
        
        // Populate workshop, gallery, and sports
        if (index % 3 === 0) {
          workshopImages.push(entry);
        } else if (index % 3 === 1) {
          galleryImages.push(entry);
        } else {
          sportsImages.push(entry);
        }
      }
    });
    
    // Write back to JSON files!
    if (workshopImages.length > 0) {
      fs.writeFileSync(path.join(__dirname, 'workshop.json'), JSON.stringify(workshopImages, null, 2));
      console.log(`Successfully restored ${workshopImages.length} images to workshop.json`);
    }
    
    if (galleryImages.length > 0) {
      fs.writeFileSync(path.join(__dirname, 'gallery.json'), JSON.stringify(galleryImages, null, 2));
      console.log(`Successfully restored ${galleryImages.length} images to gallery.json`);
    }

    if (sportsImages.length > 0) {
      fs.writeFileSync(path.join(__dirname, 'sports.json'), JSON.stringify(sportsImages, null, 2));
      console.log(`Successfully restored ${sportsImages.length} images to sports.json`);
    }
    
    console.log("Database restore complete!");
    
  } catch (error) {
    console.error("Error during Cloudinary restore:", error.message);
  }
}

restore();
