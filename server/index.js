const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const serveIndex = require('serve-index'); // Added for directory listing
const nodemailer = require('nodemailer');
const compression = require('compression');

const cloudinary = require('cloudinary').v2;

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = process.env.PORT || 5000;

// Email Transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Create uploads directory if it doesn't exist (temporary storage)
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Middleware
app.use(compression());
app.use(cors());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(morgan('dev'));
app.use(express.json());

// Serve static files AND allow directory listing for /uploads (keeping for existing files)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')), serveIndex(path.join(__dirname, 'uploads'), { 'icons': true }));

// Storage Config (Multer)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 } // Support larger files (100MB)
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'BEC University API is running' });
});

app.get('/api/notices', (req, res) => {
  res.json([
    { id: 1, title: 'Admissions 2025 Open', date: '2025-03-22' },
    { id: 2, title: 'National Level Seminar', date: '2025-04-10' }
  ]);
});

// Contact/Inquiry Form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, course, branch, message } = req.body;
  
  // 1. Send Inquiry to Admin (aimsbbsrsupport@gmail.com)
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL || 'aimsbbsrsupport@gmail.com',
    subject: `New Admission Inquiry: ${course} - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: auto;">
        <h2 style="color: #0b1a40; border-bottom: 3px solid #ffaa00; padding-bottom: 10px;">New Admission Inquiry</h2>
        <div style="padding: 10px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Branch/Specialization:</strong> ${branch}</p>
        </div>
        <p><strong>Message:</strong></p>
        <div style="background: #fdfdfd; padding: 15px; border-radius: 8px; font-style: italic; border: 1px solid #eee;">
          ${message || 'No additional message.'}
        </div>
        <p style="margin-top: 30px; font-size: 11px; color: #888;">Logged securely from BEC Admission Portal</p>
      </div>
    `
  };

  // 2. Send 'Thank You' Auto-Reply to the Student/Applicant
  const studentMailOptions = {
    from: `"Bhubaneswar Engineering College" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank You for your Inquiry, ${name}! - BEC Admission Cell`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <!-- Banner Image -->
        <div style="width: 100%; height: 200px; overflow: hidden; background-color: #0b1a40;">
          <img 
            src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" 
            alt="BEC Campus" 
            style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;" 
          />
        </div>
        
        <!-- Content -->
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #0b1a40; margin-top: 0;">Dear ${name},</h2>
          <p style="color: #444; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to <strong>Bhubaneswar Engineering College (BEC)</strong>. We have received your inquiry regarding the <strong>${course}</strong> program successfully.
          </p>
          <p style="color: #444; font-size: 16px; line-height: 1.6;">
            Our dedicated academic council members are reviewing your request and will get back to you shortly at <strong>${phone}</strong> or via this email.
          </p>
          
          <div style="margin: 30px 0; padding: 20px; background: #f8fafc; border-left: 4px solid #ffaa00; border-radius: 4px;">
            <p style="margin: 0; color: #333; font-size: 14px;"><strong>Your Submitted Details:</strong></p>
            <ul style="margin-top: 10px; color: #666; font-size: 14px; padding-left: 20px;">
              <li><strong>Course:</strong> ${course}</li>
              <li><strong>Branch:</strong> ${branch}</li>
            </ul>
          </div>
          
          <p style="color: #444; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our <a href="https://becbbsr.ac.in" style="color: #0ea5e9;">official website</a> to learn more about our state-of-the-art facilities and placement records.
          </p>
          <br/>
          <p style="color: #0b1a40; font-size: 16px; font-weight: bold; margin-bottom: 5px;">Best Regards,</p>
          <p style="color: #666; font-size: 14px; margin-top: 0;"><strong>Admission Cell</strong><br/>Bhubaneswar Engineering College</p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 15px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha<br/>
            Need immediate help? Call us at +91 94370 44215
          </p>
        </div>
      </div>
    `
  };

  try {
    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions)
    ]);
    res.json({ success: true, message: 'Inquiry sent and auto-reply triggered successfully' });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Cloudinary Upload Route
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded.');

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'bec_web_assets',
      resource_type: 'auto'
    });

    // Delete file from local storage after successful upload
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      filename: req.file.filename,
      mimetype: req.file.mimetype
    });
  } catch (error) {
    console.error("Cloudinary Upload error:", error);
    
    // Cleanup local file even on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ success: false, error: error.message });
  }
});

// Achievements persistence
const achievementsFile = path.join(__dirname, 'achievements.json');
const getAchievements = () => {
  if (!fs.existsSync(achievementsFile)) return [];
  return JSON.parse(fs.readFileSync(achievementsFile, 'utf8'));
};

const saveAchievements = (data) => {
  fs.writeFileSync(achievementsFile, JSON.stringify(data, null, 2));
};

const aeroClubFile = path.join(__dirname, 'aeroclub.json');
const getAeroClub = () => {
  if (!fs.existsSync(aeroClubFile)) return [];
  return JSON.parse(fs.readFileSync(aeroClubFile, 'utf8'));
};

const saveAeroClub = (data) => {
  fs.writeFileSync(aeroClubFile, JSON.stringify(data, null, 2));
};

const workshopFile = path.join(__dirname, 'workshop.json');
const getWorkshopGallery = () => {
  if (!fs.existsSync(workshopFile)) return [];
  return JSON.parse(fs.readFileSync(workshopFile, 'utf8'));
};

const saveWorkshopGallery = (data) => {
  fs.writeFileSync(workshopFile, JSON.stringify(data, null, 2));
};

const sportsFile = path.join(__dirname, 'sports.json');
const getSportsGallery = () => {
  if (!fs.existsSync(sportsFile)) return [];
  return JSON.parse(fs.readFileSync(sportsFile, 'utf8'));
};

const saveSportsGallery = (data) => {
  fs.writeFileSync(sportsFile, JSON.stringify(data, null, 2));
};

const galleryFile = path.join(__dirname, 'gallery.json');
const getPhotoGallery = () => {
  if (!fs.existsSync(galleryFile)) return [];
  return JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
};

const savePhotoGallery = (data) => {
  fs.writeFileSync(galleryFile, JSON.stringify(data, null, 2));
};




// GET all achievements
app.get('/api/achievements', (req, res) => {
  res.json(getAchievements());
});

// POST (Add or Update) achievement
app.post('/api/achievements', (req, res) => {
  const achievements = getAchievements();
  const achievement = req.body;
  
  if (achievement.id) {
    const index = achievements.findIndex(a => a.id === achievement.id);
    if (index !== -1) {
      achievements[index] = achievement;
    } else {
      achievements.push(achievement);
    }
  } else {
    achievement.id = Date.now().toString();
    achievements.push(achievement);
  }
  
  saveAchievements(achievements);
  res.json({ success: true, achievement });
});

// DELETE achievement
app.delete('/api/achievements/:id', (req, res) => {
  const achievements = getAchievements();
  const updated = achievements.filter(a => a.id !== req.params.id);
  saveAchievements(updated);
  res.json({ success: true });
});

// GET all aero club activities
app.get('/api/aeroclub', (req, res) => {
  res.json(getAeroClub());
});

// POST (Add or Update) aero club activity
app.post('/api/aeroclub', (req, res) => {
  const clubData = getAeroClub();
  const item = req.body;
  if (item.id) {
    const index = clubData.findIndex(a => a.id === item.id);
    if (index !== -1) clubData[index] = item;
    else clubData.push(item);
  } else {
    item.id = Date.now().toString();
    clubData.push(item);
  }
  saveAeroClub(clubData);
  res.json({ success: true, item });
});

// DELETE aero club activity
app.delete('/api/aeroclub/:id', (req, res) => {
  const clubData = getAeroClub();
  const updated = clubData.filter(a => a.id !== req.params.id);
  saveAeroClub(updated);
  res.json({ success: true });
});

// GET all workshop gallery items
app.get('/api/workshop', (req, res) => {
  res.json(getWorkshopGallery());
});

// POST (Add or Update) workshop gallery item
app.post('/api/workshop', (req, res) => {
  const gallery = getWorkshopGallery();
  const item = req.body;
  if (item.id) {
    const index = gallery.findIndex(a => a.id === item.id);
    if (index !== -1) gallery[index] = item;
    else gallery.push(item);
  } else {
    item.id = Date.now().toString();
    gallery.push(item);
  }
  saveWorkshopGallery(gallery);
  res.json({ success: true, item });
});

// DELETE workshop gallery item
app.delete('/api/workshop/:id', (req, res) => {
  const gallery = getWorkshopGallery();
  const updated = gallery.filter(a => a.id !== req.params.id);
  saveWorkshopGallery(updated);
  res.json({ success: true });
});

// GET all sports gallery items
app.get('/api/sports', (req, res) => {
  res.json(getSportsGallery());
});

// POST (Add or Update) sports gallery item
app.post('/api/sports', (req, res) => {
  const gallery = getSportsGallery();
  const item = req.body;
  if (item.id) {
    const index = gallery.findIndex(a => a.id === item.id);
    if (index !== -1) gallery[index] = item;
    else gallery.push(item);
  } else {
    item.id = Date.now().toString();
    gallery.push(item);
  }
  saveSportsGallery(gallery);
  res.json({ success: true, item });
});

// DELETE sports gallery item
app.delete('/api/sports/:id', (req, res) => {
  const gallery = getSportsGallery();
  const updated = gallery.filter(a => a.id !== req.params.id);
  saveSportsGallery(updated);
  res.json({ success: true });
});

// GET all photo gallery items
app.get('/api/gallery', (req, res) => {
  res.json(getPhotoGallery());
});

// POST (Add or Update) photo gallery item
app.post('/api/gallery', (req, res) => {
  const gallery = getPhotoGallery();
  const item = req.body;
  if (item.id) {
    const index = gallery.findIndex(a => a.id === item.id);
    if (index !== -1) gallery[index] = item;
    else gallery.push(item);
  } else {
    item.id = Date.now().toString();
    gallery.push(item);
  }
  savePhotoGallery(gallery);
  res.json({ success: true, item });
});

// DELETE photo gallery item
app.delete('/api/gallery/:id', (req, res) => {
  const gallery = getPhotoGallery();
  const updated = gallery.filter(a => a.id !== req.params.id);
  savePhotoGallery(updated);
  res.json({ success: true });
});




// Serve static assets from React client build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// SPA Routing: any non-API route serves index.html from dist
app.get('(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Upload dashboard: http://localhost:${PORT}/uploads`);
});
