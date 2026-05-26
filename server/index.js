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

// Email Transporter setup (Robust SMTP Configuration for Production cloud servers)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Bypasses self-signed certificate blocks on certain VPS networks
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
  contentSecurityPolicy: false,
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
  
  // 1. Send Inquiry to Admin (becgroupbbsr@gmail.com)
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL || 'becgroupbbsr@gmail.com',
    subject: `New Admission Inquiry: ${course} - ${name}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(15,23,42,0.15); border: 1px solid rgba(0,0,0,0.05); }
    .header-banner { background: linear-gradient(135deg, #0b1c3a 0%, #1e3a8a 100%); padding: 25px; text-align: center; }
    .logo { height: 60px; width: auto; margin-bottom: 8px; }
    .college-name { color: #ffffff; font-size: 16px; font-weight: 800; margin: 0; letter-spacing: 0.5px; text-transform: uppercase; }
    .college-tagline { color: #ffaa00; font-size: 9px; font-weight: 700; margin: 2px 0 0 0; letter-spacing: 2px; text-transform: uppercase; }
    .notification-header { background: #ffaa00; color: #0b1c3a; text-align: center; padding: 12px; font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; }
    .content-body { padding: 35px; background: #ffffff; }
    .intro-text { color: #4b5563; font-size: 14px; line-height: 1.6; font-weight: 600; margin-bottom: 25px; }
    .data-grid { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; }
    .grid-row { display: table; width: 100%; margin-bottom: 12px; }
    .grid-label { display: table-cell; width: 35%; color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; }
    .grid-value { display: table-cell; width: 65%; color: #0b1c3a; font-size: 13px; font-weight: 700; }
    .message-box { background: #fff; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 15px; margin-top: 15px; font-style: italic; color: #475569; font-size: 13px; }
    .footer { background: #0f172a; padding: 20px; text-align: center; color: #94a3b8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-banner">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" class="logo" />
      <div class="college-name">Bhubaneswar Engineering College</div>
      <div class="college-tagline">ERP Admission Management System</div>
    </div>
    <div class="notification-header">🚨 NEW ADMISSION INQUIRY LOGGED</div>
    <div class="content-body">
      <p class="intro-text">
        A new student has submitted an inquiry form on the BEC website. Please follow up on WhatsApp / Call immediately!
      </p>
      
      <div class="data-grid">
        <div class="grid-row"><span class="grid-label">Candidate Name:</span><span class="grid-value" style="color: #1e3a8a; font-size: 15px; font-weight: 800;">${name}</span></div>
        <div class="grid-row"><span class="grid-label">WhatsApp No:</span><span class="grid-value" style="color: #10b981; font-size: 14px; font-weight: 800;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #10b981; text-decoration: none;">📞 ${phone} (Click to Chat)</a></span></div>
        <div class="grid-row"><span class="grid-label">Email Address:</span><span class="grid-value"><a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a></span></div>
        <div class="grid-row"><span class="grid-label">Selected Course:</span><span class="grid-value">${course}</span></div>
        <div class="grid-row"><span class="grid-label">Preferred Branch:</span><span class="grid-value">${branch}</span></div>
        
        <div class="grid-label" style="display: block; width: 100%; margin-top: 15px; margin-bottom: 5px;">Student Message:</div>
        <div class="message-box">${message || 'No additional message.'}</div>
      </div>
    </div>
    <div class="footer">
      BEC AUTOMATED ERP AGENT • SECURE LOG
    </div>
  </div>
</body>
</html>
    `
  };

  // 2. Send 'Thank You' Auto-Reply to the Student/Applicant
  const studentMailOptions = {
    from: `"Bhubaneswar Engineering College (BEC)" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank You for your Inquiry, ${name}! - BEC Admission Cell`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(15,23,42,0.15); border: 1px solid rgba(0,0,0,0.05); }
    .header-banner { background: linear-gradient(135deg, #0b1c3a 0%, #1e3a8a 100%); padding: 30px; text-align: center; position: relative; overflow: hidden; }
    .header-banner::before { content: ""; position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(255, 170, 0, 0.15); border-radius: 50%; blur: 40px; }
    .logo { height: 75px; width: auto; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); margin-bottom: 10px; }
    .college-name { color: #ffffff; font-size: 20px; font-weight: 800; margin: 5px 0 0 0; letter-spacing: 1px; text-transform: uppercase; }
    .college-tagline { color: #ffaa00; font-size: 10px; font-weight: 700; margin: 2px 0 0 0; letter-spacing: 3px; text-transform: uppercase; }
    .hero-image-container { position: relative; width: 100%; height: 220px; overflow: hidden; }
    .hero-image { width: 100%; height: 100%; object-fit: cover; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,28,58,0) 40%, rgba(11,28,58,0.7) 100%); }
    .badge { position: absolute; bottom: 20px; left: 20px; background: #ffaa00; color: #0b1c3a; padding: 6px 16px; border-radius: 50px; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; box-shadow: 0 4px 10px rgba(255,170,0,0.3); }
    .content-body { padding: 40px 35px; background: #ffffff; }
    .greeting { color: #0b1c3a; font-size: 22px; font-weight: 800; margin-top: 0; margin-bottom: 15px; }
    .main-text { color: #4b5563; font-size: 15px; line-height: 1.65; font-weight: 500; margin-bottom: 25px; }
    .callout-box { background: linear-gradient(135deg, rgba(255,170,0,0.05) 0%, rgba(255,170,0,0.1) 100%); border-left: 5px solid #ffaa00; border-radius: 12px; padding: 20px; margin: 30px 0; }
    .callout-title { color: #0b1c3a; font-size: 15px; font-weight: 800; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .callout-text { color: #1e3a8a; font-size: 14px; font-weight: 700; margin: 0; line-height: 1.5; }
    .data-grid { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px; margin: 30px 0; }
    .grid-title { color: #0b1c3a; font-size: 14px; font-weight: 800; text-transform: uppercase; margin-top: 0; margin-bottom: 15px; letter-spacing: 1px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; }
    .grid-row { display: table; width: 100%; margin-bottom: 12px; }
    .grid-label { display: table-cell; width: 40%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; }
    .grid-value { display: table-cell; width: 60%; color: #0b1c3a; font-size: 13px; font-weight: 700; }
    .stats-container { display: table; width: 100%; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px; }
    .stat-box { display: table-cell; width: 33.3%; }
    .stat-number { color: #ffaa00; font-size: 20px; font-weight: 800; margin: 0; }
    .stat-label { color: #64748b; font-size: 9px; font-weight: 800; text-transform: uppercase; margin: 2px 0 0 0; letter-spacing: 1px; }
    .signature { margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 25px; }
    .signature-title { color: #0b1c3a; font-size: 15px; font-weight: 800; margin: 0; }
    .signature-dept { color: #64748b; font-size: 12px; font-weight: 700; margin: 3px 0 0 0; }
    .footer { background: #0f172a; padding: 30px; text-align: center; color: #94a3b8; font-size: 12px; font-weight: 500; }
    .footer-address { margin: 0 0 10px 0; color: #cbd5e1; line-height: 1.5; }
    .footer-links { margin: 15px 0 0 0; }
    .footer-link { color: #ffaa00; text-decoration: none; font-weight: 700; margin: 0 10px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-banner">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" class="logo" />
      <div class="college-name">Bhubaneswar Engineering College</div>
      <div class="college-tagline">Excellence • Innovation • Leadership</div>
    </div>
    <div class="hero-image-container">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" alt="BEC Campus" class="hero-image" />
      <div class="hero-overlay"></div>
      <div class="badge">Session 2026-27</div>
    </div>
    <div class="content-body">
      <h2 class="greeting">Dear ${name},</h2>
      <p class="main-text">
        Thank you for choosing <strong>Bhubaneswar Engineering College (BEC)</strong>! We have successfully received your inquiry regarding the <strong>${course}</strong> program. 
      </p>
      
      <div class="callout-box">
        <div class="callout-title">📞 Immediate Action & Next Steps</div>
        <p class="callout-text">
          Our senior academic counselor has been assigned to your file and will **call you shortly** at your WhatsApp number **${phone}** to guide you through career counseling and direct admissions!
        </p>
      </div>

      <div class="data-grid">
        <div class="grid-title">Your Submitted Details</div>
        <div class="grid-row"><span class="grid-label">Full Name:</span><span class="grid-value">${name}</span></div>
        <div class="grid-row"><span class="grid-label">WhatsApp No:</span><span class="grid-value">${phone}</span></div>
        <div class="grid-row"><span class="grid-label">Email Address:</span><span class="grid-value">${email}</span></div>
        <div class="grid-row"><span class="grid-label">Course:</span><span class="grid-value">${course}</span></div>
        <div class="grid-row"><span class="grid-label">Branch:</span><span class="grid-value">${branch}</span></div>
      </div>

      <!-- Course, Branches, Placement & Early Bird Promotion -->
      <div style="margin-top: 30px; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fafafb; font-family: 'Segoe UI', Roboto, sans-serif;">
        <div style="background: #0b1c3a; color: #ffffff; padding: 15px; text-align: center; font-size: 13px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">
          🎓 ADMISSION FEE STRUCTURE & SPECIAL OFFER
        </div>
        <div style="padding: 20px;">
          <div style="border-bottom: 1px solid #cbd5e1; padding-bottom: 15px; margin-bottom: 15px; text-align: center;">
            <span style="font-size: 11px; font-weight: 900; color: #10b981; background: rgba(16,185,129,0.1); padding: 5px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">
              🛡️ 100% Placement Guarantee
            </span>
            <span style="font-size: 11px; font-weight: 900; color: #ffaa00; background: rgba(255,170,0,0.1); padding: 5px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px;">
              🎁 Scholarship Benefits Active
            </span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <div style="display: table; width: 100%; margin-bottom: 8px;">
              <span style="display: table-cell; width: 60%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">Total Course Fees:</span>
              <span style="display: table-cell; width: 40%; color: #0b1c3a; font-size: 14px; font-weight: 800;">₹70,000 / Year</span>
            </div>
            <div style="display: table; width: 100%; margin-bottom: 8px;">
              <span style="display: table-cell; width: 60%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">Premium Hostel Accomodation:</span>
              <span style="display: table-cell; width: 40%; color: #0b1c3a; font-size: 14px; font-weight: 800;">₹50,000 / Year</span>
            </div>
          </div>

          <div style="background: rgba(30,58,138,0.05); border-left: 4px solid #1e3a8a; padding: 12px 15px; border-radius: 8px; font-size: 12px; font-weight: 700; color: #1e3a8a; margin-bottom: 20px; line-height: 1.5; text-align: left;">
            ⚡ <strong>Early Admission Privilege:</strong> Confirm your registration or speak with our counseling team today to unlock an <strong>exclusive early-bird discount</strong> on this season's B.Tech / Diploma / MBA admission!
          </div>

          <div>
            <div style="color: #0b1c3a; font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; text-align: left;">
              📍 Available Integrated Specializations & Branches
            </div>
            <div style="display: table; width: 100%; text-align: left;">
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Aero & AME Engineering</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• CSE & CSE (Data Science)</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Agriculture Engineering</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Civil & Environmental Engg.</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• EE & Electrical (CS) Engg.</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Mechanical & Additive Mfg.</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• MBA (Dual Specialization)</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Diploma Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="stats-container">
        <div class="stat-box">
          <p class="stat-number">16+</p>
          <p class="stat-label">Years of Excellence</p>
        </div>
        <div class="stat-box">
          <p class="stat-number">90%+</p>
          <p class="stat-label">Placement Record</p>
        </div>
        <div class="stat-box">
          <p class="stat-number">40-Acre</p>
          <p class="stat-label">Green Eco-Campus</p>
        </div>
      </div>

      <div class="signature">
        <p class="signature-title">Best Regards,</p>
        <p class="signature-title" style="color: #ffaa00;">Director of Admissions</p>
        <p class="signature-dept">Bhubaneswar Engineering College (BEC)</p>
      </div>
    </div>
    <div class="footer">
      <p class="footer-address">
        Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha, India<br/>
        Helpline Number: +91 94370 44215 | +91 94370 90875
      </p>
      <div class="footer-links">
        <a href="https://becbbsr.ac.in" class="footer-link">Official Website</a>
        <a href="https://becbbsr.ac.in/facilities" class="footer-link">Facilities</a>
        <a href="https://becbbsr.ac.in/placement" class="footer-link">Placements</a>
      </div>
    </div>
  </div>
</body>
</html>
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

// Admission Query/Form submission
app.post('/api/admission', async (req, res) => {
  const { name, email, phone, city, course, qualification, branch, message } = req.body;
  
  // 1. Send Inquiry to Admin (becgroupbbsr@gmail.com)
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL || 'becgroupbbsr@gmail.com',
    subject: `New Admission Query: ${course} - ${name}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(15,23,42,0.15); border: 1px solid rgba(0,0,0,0.05); }
    .header-banner { background: linear-gradient(135deg, #0b1c3a 0%, #1e3a8a 100%); padding: 25px; text-align: center; }
    .logo { height: 60px; width: auto; margin-bottom: 8px; }
    .college-name { color: #ffffff; font-size: 16px; font-weight: 800; margin: 0; letter-spacing: 0.5px; text-transform: uppercase; }
    .college-tagline { color: #ffaa00; font-size: 9px; font-weight: 700; margin: 2px 0 0 0; letter-spacing: 2px; text-transform: uppercase; }
    .notification-header { background: #ffaa00; color: #0b1c3a; text-align: center; padding: 12px; font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; }
    .content-body { padding: 35px; background: #ffffff; }
    .intro-text { color: #4b5563; font-size: 14px; line-height: 1.6; font-weight: 600; margin-bottom: 25px; }
    .data-grid { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; }
    .grid-row { display: table; width: 100%; margin-bottom: 12px; }
    .grid-label { display: table-cell; width: 35%; color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; }
    .grid-value { display: table-cell; width: 65%; color: #0b1c3a; font-size: 13px; font-weight: 700; }
    .message-box { background: #fff; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 15px; margin-top: 15px; font-style: italic; color: #475569; font-size: 13px; }
    .footer { background: #0f172a; padding: 20px; text-align: center; color: #94a3b8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-banner">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" class="logo" />
      <div class="college-name">Bhubaneswar Engineering College</div>
      <div class="college-tagline">ERP Admission Management System</div>
    </div>
    <div class="notification-header">🚨 NEW ADMISSION QUERY LOGGED</div>
    <div class="content-body">
      <p class="intro-text">
        A new student has submitted an inquiry form on the BEC Admission Portal. Please follow up on WhatsApp / Call immediately!
      </p>
      
      <div class="data-grid">
        <div class="grid-row"><span class="grid-label">Candidate Name:</span><span class="grid-value" style="color: #1e3a8a; font-size: 15px; font-weight: 800;">${name}</span></div>
        <div class="grid-row"><span class="grid-label">WhatsApp No:</span><span class="grid-value" style="color: #10b981; font-size: 14px; font-weight: 800;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #10b981; text-decoration: none;">📞 ${phone} (Click to Chat)</a></span></div>
        <div class="grid-row"><span class="grid-label">Email Address:</span><span class="grid-value"><a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a></span></div>
        <div class="grid-row"><span class="grid-label">Selected Course:</span><span class="grid-value">${course}</span></div>
        <div class="grid-row"><span class="grid-label">Preferred Branch:</span><span class="grid-value">${branch}</span></div>
        ${city ? `<div class="grid-row"><span class="grid-label">City/Location:</span><span class="grid-value">${city}</span></div>` : ''}
        ${qualification ? `<div class="grid-row"><span class="grid-label">Qualification:</span><span class="grid-value">${qualification}</span></div>` : ''}
        
        <div class="grid-label" style="display: block; width: 100%; margin-top: 15px; margin-bottom: 5px;">Student Message:</div>
        <div class="message-box">${message || 'No additional message.'}</div>
      </div>
    </div>
    <div class="footer">
      BEC AUTOMATED ERP AGENT • SECURE LOG
    </div>
  </div>
</body>
</html>
    `
  };

  // 2. Send 'Thank You' Auto-Reply to the Student/Applicant
  const studentMailOptions = {
    from: `"Bhubaneswar Engineering College (BEC)" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank You for applying to BEC, ${name}! - Admission Query 2026-27`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(15,23,42,0.15); border: 1px solid rgba(0,0,0,0.05); }
    .header-banner { background: linear-gradient(135deg, #0b1c3a 0%, #1e3a8a 100%); padding: 30px; text-align: center; position: relative; overflow: hidden; }
    .header-banner::before { content: ""; position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(255, 170, 0, 0.15); border-radius: 50%; blur: 40px; }
    .logo { height: 75px; width: auto; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); margin-bottom: 10px; }
    .college-name { color: #ffffff; font-size: 20px; font-weight: 800; margin: 5px 0 0 0; letter-spacing: 1px; text-transform: uppercase; }
    .college-tagline { color: #ffaa00; font-size: 10px; font-weight: 700; margin: 2px 0 0 0; letter-spacing: 3px; text-transform: uppercase; }
    .hero-image-container { position: relative; width: 100%; height: 220px; overflow: hidden; }
    .hero-image { width: 100%; height: 100%; object-fit: cover; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,28,58,0) 40%, rgba(11,28,58,0.7) 100%); }
    .badge { position: absolute; bottom: 20px; left: 20px; background: #ffaa00; color: #0b1c3a; padding: 6px 16px; border-radius: 50px; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; box-shadow: 0 4px 10px rgba(255,170,0,0.3); }
    .content-body { padding: 40px 35px; background: #ffffff; }
    .greeting { color: #0b1c3a; font-size: 22px; font-weight: 800; margin-top: 0; margin-bottom: 15px; }
    .main-text { color: #4b5563; font-size: 15px; line-height: 1.65; font-weight: 500; margin-bottom: 25px; }
    .callout-box { background: linear-gradient(135deg, rgba(255,170,0,0.05) 0%, rgba(255,170,0,0.1) 100%); border-left: 5px solid #ffaa00; border-radius: 12px; padding: 20px; margin: 30px 0; }
    .callout-title { color: #0b1c3a; font-size: 15px; font-weight: 800; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .callout-text { color: #1e3a8a; font-size: 14px; font-weight: 700; margin: 0; line-height: 1.5; }
    .data-grid { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px; margin: 30px 0; }
    .grid-title { color: #0b1c3a; font-size: 14px; font-weight: 800; text-transform: uppercase; margin-top: 0; margin-bottom: 15px; letter-spacing: 1px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; }
    .grid-row { display: table; width: 100%; margin-bottom: 12px; }
    .grid-label { display: table-cell; width: 40%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; }
    .grid-value { display: table-cell; width: 60%; color: #0b1c3a; font-size: 13px; font-weight: 700; }
    .stats-container { display: table; width: 100%; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px; }
    .stat-box { display: table-cell; width: 33.3%; }
    .stat-number { color: #ffaa00; font-size: 20px; font-weight: 800; margin: 0; }
    .stat-label { color: #64748b; font-size: 9px; font-weight: 800; text-transform: uppercase; margin: 2px 0 0 0; letter-spacing: 1px; }
    .signature { margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 25px; }
    .signature-title { color: #0b1c3a; font-size: 15px; font-weight: 800; margin: 0; }
    .signature-dept { color: #64748b; font-size: 12px; font-weight: 700; margin: 3px 0 0 0; }
    .footer { background: #0f172a; padding: 30px; text-align: center; color: #94a3b8; font-size: 12px; font-weight: 500; }
    .footer-address { margin: 0 0 10px 0; color: #cbd5e1; line-height: 1.5; }
    .footer-links { margin: 15px 0 0 0; }
    .footer-link { color: #ffaa00; text-decoration: none; font-weight: 700; margin: 0 10px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-banner">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" class="logo" />
      <div class="college-name">Bhubaneswar Engineering College</div>
      <div class="college-tagline">Excellence • Innovation • Leadership</div>
    </div>
    <div class="hero-image-container">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" alt="BEC Campus" class="hero-image" />
      <div class="hero-overlay"></div>
      <div class="badge">Session 2026-27</div>
    </div>
    <div class="content-body">
      <h2 class="greeting">Dear ${name},</h2>
      <p class="main-text">
        Thank you for choosing <strong>Bhubaneswar Engineering College (BEC)</strong>! We have successfully received your admission query regarding the <strong>${course}</strong> program. 
      </p>
      
      <div class="callout-box">
        <div class="callout-title">📞 Immediate Action & Next Steps</div>
        <p class="callout-text">
          Our senior academic counselor has been assigned to your file and will **call you shortly** at your WhatsApp number **${phone}** to guide you through career counseling and direct admissions!
        </p>
      </div>

      <div class="data-grid">
        <div class="grid-title">Your Submitted Details</div>
        <div class="grid-row"><span class="grid-label">Full Name:</span><span class="grid-value">${name}</span></div>
        <div class="grid-row"><span class="grid-label">WhatsApp No:</span><span class="grid-value">${phone}</span></div>
        <div class="grid-row"><span class="grid-label">Email Address:</span><span class="grid-value">${email}</span></div>
        <div class="grid-row"><span class="grid-label">Course:</span><span class="grid-value">${course}</span></div>
        <div class="grid-row"><span class="grid-label">Branch:</span><span class="grid-value">${branch}</span></div>
        ${city ? `<div class="grid-row"><span class="grid-label">City/Location:</span><span class="grid-value">${city}</span></div>` : ''}
        ${qualification ? `<div class="grid-row"><span class="grid-label">Qualification:</span><span class="grid-value">${qualification}</span></div>` : ''}
      </div>

      <!-- Course, Branches, Placement & Early Bird Promotion -->
      <div style="margin-top: 30px; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fafafb; font-family: 'Segoe UI', Roboto, sans-serif;">
        <div style="background: #0b1c3a; color: #ffffff; padding: 15px; text-align: center; font-size: 13px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">
          🎓 ADMISSION FEE STRUCTURE & SPECIAL OFFER
        </div>
        <div style="padding: 20px;">
          <div style="border-bottom: 1px solid #cbd5e1; padding-bottom: 15px; margin-bottom: 15px; text-align: center;">
            <span style="font-size: 11px; font-weight: 900; color: #10b981; background: rgba(16,185,129,0.1); padding: 5px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">
              🛡️ 100% Placement Guarantee
            </span>
            <span style="font-size: 11px; font-weight: 900; color: #ffaa00; background: rgba(255,170,0,0.1); padding: 5px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px;">
              🎁 Scholarship Benefits Active
            </span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <div style="display: table; width: 100%; margin-bottom: 8px;">
              <span style="display: table-cell; width: 60%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">Total Course Fees:</span>
              <span style="display: table-cell; width: 40%; color: #0b1c3a; font-size: 14px; font-weight: 800;">₹70,000 / Year</span>
            </div>
            <div style="display: table; width: 100%; margin-bottom: 8px;">
              <span style="display: table-cell; width: 60%; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase;">Premium Hostel Accomodation:</span>
              <span style="display: table-cell; width: 40%; color: #0b1c3a; font-size: 14px; font-weight: 800;">₹50,000 / Year</span>
            </div>
          </div>

          <div style="background: rgba(30,58,138,0.05); border-left: 4px solid #1e3a8a; padding: 12px 15px; border-radius: 8px; font-size: 12px; font-weight: 700; color: #1e3a8a; margin-bottom: 20px; line-height: 1.5; text-align: left;">
            ⚡ <strong>Early Admission Privilege:</strong> Confirm your registration or speak with our counseling team today to unlock an <strong>exclusive early-bird discount</strong> on this season's B.Tech / Diploma / MBA admission!
          </div>

          <div>
            <div style="color: #0b1c3a; font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; text-align: left;">
              📍 Available Integrated Specializations & Branches
            </div>
            <div style="display: table; width: 100%; text-align: left;">
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Aero & AME Engineering</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• CSE & CSE (Data Science)</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Agriculture Engineering</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Civil & Environmental Engg.</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• EE & Electrical (CS) Engg.</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Mechanical & Additive Mfg.</div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• MBA (Dual Specialization)</div>
                <div style="display: table-cell; width: 50%; font-size: 11px; font-weight: 700; color: #475569; padding: 4px 0;">• Diploma Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="stats-container">
        <div class="stat-box">
          <p class="stat-number">16+</p>
          <p class="stat-label">Years of Excellence</p>
        </div>
        <div class="stat-box">
          <p class="stat-number">90%+</p>
          <p class="stat-label">Placement Record</p>
        </div>
        <div class="stat-box">
          <p class="stat-number">40-Acre</p>
          <p class="stat-label">Green Eco-Campus</p>
        </div>
      </div>

      <div class="signature">
        <p class="signature-title">Best Regards,</p>
        <p class="signature-title" style="color: #ffaa00;">Director of Admissions</p>
        <p class="signature-dept">Bhubaneswar Engineering College (BEC)</p>
      </div>
    </div>
    <div class="footer">
      <p class="footer-address">
        Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha, India<br/>
        Helpline Number: +91 94370 44215 | +91 94370 90875
      </p>
      <div class="footer-links">
        <a href="https://becbbsr.ac.in" class="footer-link">Official Website</a>
        <a href="https://becbbsr.ac.in/facilities" class="footer-link">Facilities</a>
        <a href="https://becbbsr.ac.in/placement" class="footer-link">Placements</a>
      </div>
    </div>
  </div>
</body>
</html>
    `
  };

  try {
    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions)
    ]);
    res.json({ success: true, message: 'Admission query sent and auto-reply triggered successfully' });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Newsletter Subscription Route
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required.' });
  }

  // 1. Send subscription notification to Admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL || 'becgroupbbsr@gmail.com',
    subject: `New Newsletter Subscriber: ${email}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(15,23,42,0.15); border: 1px solid rgba(0,0,0,0.05); }
    .header-banner { background: linear-gradient(135deg, #0b1c3a 0%, #1e3a8a 100%); padding: 25px; text-align: center; }
    .logo { height: 60px; width: auto; margin-bottom: 8px; }
    .college-name { color: #ffffff; font-size: 16px; font-weight: 800; margin: 0; letter-spacing: 0.5px; text-transform: uppercase; }
    .college-tagline { color: #ffaa00; font-size: 9px; font-weight: 700; margin: 2px 0 0 0; letter-spacing: 2px; text-transform: uppercase; }
    .notification-header { background: #ffaa00; color: #0b1c3a; text-align: center; padding: 12px; font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; }
    .content-body { padding: 35px; background: #ffffff; }
    .intro-text { color: #4b5563; font-size: 14px; line-height: 1.6; font-weight: 600; margin-bottom: 25px; }
    .data-grid { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; }
    .grid-row { display: table; width: 100%; margin-bottom: 12px; }
    .grid-label { display: table-cell; width: 35%; color: #64748b; font-size: 11px; font-weight: 800; text-transform: uppercase; }
    .grid-value { display: table-cell; width: 65%; color: #0b1c3a; font-size: 13px; font-weight: 700; }
    .footer { background: #0f172a; padding: 20px; text-align: center; color: #94a3b8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-banner">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" class="logo" />
      <div class="college-name">Bhubaneswar Engineering College</div>
      <div class="college-tagline">Intelligence & Career Bulletins</div>
    </div>
    <div class="notification-header">📰 NEW NEWSLETTER SUBSCRIBER</div>
    <div class="content-body">
      <p class="intro-text">
        A new user has subscribed to the BEC Intelligence Newsletter from the website footer.
      </p>
      
      <div class="data-grid">
        <div class="grid-row"><span class="grid-label">Subscriber Email:</span><span class="grid-value" style="color: #1e3a8a; font-size: 15px; font-weight: 800;"><a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a></span></div>
        <div class="grid-row"><span class="grid-label">Subscription Time:</span><span class="grid-value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)</span></div>
      </div>
    </div>
    <div class="footer">
      BEC AUTOMATED SYSTEM • NEWSLETTER LOG
    </div>
  </div>
</body>
</html>
    `
  };

  // 2. Send premium Thank You Auto-Reply to the Subscriber
  const subscriberMailOptions = {
    from: `"Bhubaneswar Engineering College (BEC)" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Welcome to BEC Intelligence! 🚀 - Subscription Confirmed`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(15,23,42,0.15); border: 1px solid rgba(0,0,0,0.05); }
    .header-banner { background: linear-gradient(135deg, #0b1c3a 0%, #1e3a8a 100%); padding: 30px; text-align: center; position: relative; overflow: hidden; }
    .logo { height: 75px; width: auto; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); margin-bottom: 10px; }
    .college-name { color: #ffffff; font-size: 20px; font-weight: 800; margin: 5px 0 0 0; letter-spacing: 1px; text-transform: uppercase; }
    .college-tagline { color: #ffaa00; font-size: 10px; font-weight: 700; margin: 2px 0 0 0; letter-spacing: 3px; text-transform: uppercase; }
    .hero-image-container { position: relative; width: 100%; height: 220px; overflow: hidden; }
    .hero-image { width: 100%; height: 100%; object-fit: cover; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(11,28,58,0) 40%, rgba(11,28,58,0.7) 100%); }
    .badge { position: absolute; bottom: 20px; left: 20px; background: #ffaa00; color: #0b1c3a; padding: 6px 16px; border-radius: 50px; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; }
    .content-body { padding: 40px 35px; background: #ffffff; }
    .greeting { color: #0b1c3a; font-size: 22px; font-weight: 800; margin-top: 0; margin-bottom: 15px; }
    .main-text { color: #4b5563; font-size: 15px; line-height: 1.65; font-weight: 500; margin-bottom: 25px; }
    .callout-box { background: linear-gradient(135deg, rgba(255,170,0,0.05) 0%, rgba(255,170,0,0.1) 100%); border-left: 5px solid #ffaa00; border-radius: 12px; padding: 20px; margin: 30px 0; }
    .callout-title { color: #0b1c3a; font-size: 15px; font-weight: 800; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .callout-text { color: #1e3a8a; font-size: 14px; font-weight: 700; margin: 0; line-height: 1.5; }
    .stats-container { display: table; width: 100%; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px; }
    .stat-box { display: table-cell; width: 33.3%; }
    .stat-number { color: #ffaa00; font-size: 20px; font-weight: 800; margin: 0; }
    .stat-label { color: #64748b; font-size: 9px; font-weight: 800; text-transform: uppercase; margin: 2px 0 0 0; letter-spacing: 1px; }
    .signature { margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 25px; }
    .signature-title { color: #0b1c3a; font-size: 15px; font-weight: 800; margin: 0; }
    .signature-dept { color: #64748b; font-size: 12px; font-weight: 700; margin: 3px 0 0 0; }
    .footer { background: #0f172a; padding: 30px; text-align: center; color: #94a3b8; font-size: 12px; font-weight: 500; }
    .footer-address { margin: 0 0 10px 0; color: #cbd5e1; line-height: 1.5; }
    .footer-links { margin: 15px 0 0 0; }
    .footer-link { color: #ffaa00; text-decoration: none; font-weight: 700; margin: 0 10px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-banner">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" class="logo" />
      <div class="college-name">Bhubaneswar Engineering College</div>
      <div class="college-tagline">Excellence • Innovation • Leadership</div>
    </div>
    <div class="hero-image-container">
      <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" alt="BEC Campus" class="hero-image" />
      <div class="hero-overlay"></div>
      <div class="badge">BEC Intelligence</div>
    </div>
    <div class="content-body">
      <h2 class="greeting">Welcome to BEC Intelligence!</h2>
      <p class="main-text">
        We are thrilled to have you subscribe to our monthly tech and career bulletins! You will now receive regular updates, technical articles, upcoming seminar details, campus placements highlights, and expert guides directly in your inbox.
      </p>
      
      <div class="callout-box">
        <div class="callout-title">💡 What to expect from BEC Intelligence</div>
        <p class="callout-text">
          • Industry-aligned technological breakthroughs<br/>
          • Career guidance & interview prep strategies from placement cells<br/>
          • Notifications of technical seminars, workshops & global conferences at BEC<br/>
          • Real stories of success from our 5000+ alumni network
        </p>
      </div>

      <div class="stats-container">
        <div class="stat-box">
          <p class="stat-number">16+</p>
          <p class="stat-label">Years of Legacy</p>
        </div>
        <div class="stat-box">
          <p class="stat-number">90%+</p>
          <p class="stat-label">Placements Track</p>
        </div>
        <div class="stat-box">
          <p class="stat-number">40-Acre</p>
          <p class="stat-label">Green Eco-Campus</p>
        </div>
      </div>

      <div class="signature">
        <p class="signature-title">Warm Regards,</p>
        <p class="signature-title" style="color: #ffaa00;">Editorial Board, BEC IT Cell</p>
        <p class="signature-dept">Bhubaneswar Engineering College (BEC)</p>
      </div>
    </div>
    <div class="footer">
      <p class="footer-address">
        Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha, India<br/>
        Helpline Number: +91 94370 44215 | +91 94370 90875
      </p>
      <div class="footer-links">
        <a href="https://becbbsr.ac.in" class="footer-link">Official Website</a>
        <a href="https://becbbsr.ac.in/facilities" class="footer-link">Facilities</a>
        <a href="https://becbbsr.ac.in/placement" class="footer-link">Placements</a>
      </div>
    </div>
  </div>
</body>
</html>
    `
  };

  try {
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(subscriberMailOptions)
    ]);
    res.json({ success: true, message: 'Subscribed successfully and notifications sent' });
  } catch (error) {
    console.error("Subscription mail error:", error);
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


// Admin Authentication Route
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const normalizedUser = username ? username.trim().toLowerCase() : '';
  if ((normalizedUser === 'admin' || normalizedUser === 'admin@becbbsr.ac.in') && password === 'becadmin@2026') {
    res.json({ success: true, token: 'bec_session_token_2026' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid ID or Password' });
  }
});

// Generic Config Persistence Endpoints
app.get('/api/config/:key', (req, res) => {
  const key = req.params.key;
  if (key.includes('..') || key.includes('/') || key.includes('\\')) {
    return res.status(400).json({ error: 'Invalid key' });
  }
  const file = path.join(__dirname, `${key}.json`);
  if (!fs.existsSync(file)) {
    return res.json(null);
  }
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/config/:key', (req, res) => {
  const key = req.params.key;
  if (key.includes('..') || key.includes('/') || key.includes('\\')) {
    return res.status(400).json({ error: 'Invalid key' });
  }
  const file = path.join(__dirname, `${key}.json`);
  try {
    fs.writeFileSync(file, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Achievements persistence
const achievementsFile = path.join(__dirname, 'achievements.json');
const getAchievements = () => {
  if (!fs.existsSync(achievementsFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(achievementsFile, 'utf8'));
    return Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);
  } catch (e) {
    return [];
  }
};

const saveAchievements = (data) => {
  fs.writeFileSync(achievementsFile, JSON.stringify(data, null, 2));
};

const aeroClubFile = path.join(__dirname, 'aeroclub.json');
const getAeroClub = () => {
  if (!fs.existsSync(aeroClubFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(aeroClubFile, 'utf8'));
    return Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);
  } catch (e) {
    return [];
  }
};

const saveAeroClub = (data) => {
  fs.writeFileSync(aeroClubFile, JSON.stringify(data, null, 2));
};

const workshopFile = path.join(__dirname, 'workshop.json');
const getWorkshopGallery = () => {
  if (!fs.existsSync(workshopFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(workshopFile, 'utf8'));
    return Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);
  } catch (e) {
    return [];
  }
};

const saveWorkshopGallery = (data) => {
  fs.writeFileSync(workshopFile, JSON.stringify(data, null, 2));
};

const sportsFile = path.join(__dirname, 'sports.json');
const getSportsGallery = () => {
  if (!fs.existsSync(sportsFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(sportsFile, 'utf8'));
    return Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);
  } catch (e) {
    return [];
  }
};

const saveSportsGallery = (data) => {
  fs.writeFileSync(sportsFile, JSON.stringify(data, null, 2));
};

const galleryFile = path.join(__dirname, 'gallery.json');
const getPhotoGallery = () => {
  if (!fs.existsSync(galleryFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
    return Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);
  } catch (e) {
    return [];
  }
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




// Google Site Verification Route
app.get('/google5c7fd6811a6b2b1f.html', (req, res) => {
  const filePath = path.join(__dirname, 'google5c7fd6811a6b2b1f.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.type('text/html');
    res.send('google-site-verification: google5c7fd6811a6b2b1f.html');
  }
});

// Robots.txt Route
app.get('/robots.txt', (req, res) => {
  const robotsPath = path.join(__dirname, '../client/public/robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.sendFile(robotsPath);
  } else {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /\nHost: https://becbbsr.ac.in\nSitemap: https://becbbsr.ac.in/sitemap.xml");
  }
});

// Sitemap.xml Route
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.join(__dirname, '../client/public/sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.sendFile(sitemapPath);
  } else {
    res.status(404).send('Sitemap not found');
  }
});

// Serve static assets from React client build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// SPA Routing: any non-API route serves index.html from dist with strict no-cache headers to prevent loading stale chunks
app.get('/{*splat}', (req, res) => {
  // If the request is for a missing static file asset (contains an extension), do not fallback to index.html; return 404
  if (path.extname(req.path)) {
    return res.status(404).send('Not Found');
  }

  // Set strict headers to prevent caching of index.html across browsers, CDNs, and proxies
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Upload dashboard: http://localhost:${PORT}/uploads`);
});
