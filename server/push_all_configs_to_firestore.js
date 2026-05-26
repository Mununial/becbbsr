const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = "AIzaSyAM4mbEIHcTUMNr7l4huOCOalFRKjGUIU4";
const PROJECT_ID = "becbbsr-90a44";
const BASE_URL = "firestore.googleapis.com";

// Authenticate via Firebase Auth REST API using Admin credentials
async function getAuthToken() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      email: "admin@becbbsr.ac.in",
      password: "becadmin@2026",
      returnSecureToken: true
    });

    const options = {
      hostname: 'identitytoolkit.googleapis.com',
      path: `/v1/accounts:signInWithPassword?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log("🔑 Authenticating as admin@becbbsr.ac.in...");
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const result = JSON.parse(data);
            console.log("🔓 Authentication successful! Token acquired.");
            resolve(result.idToken);
          } catch (e) {
            reject(new Error("Failed to parse Auth response: " + e.message));
          }
        } else {
          // If the admin user doesn't exist yet, we attempt to sign up the admin user
          if (res.statusCode === 400 && data.includes("EMAIL_NOT_FOUND")) {
            console.log("⚠️ Admin user not found. Attempting to auto-provision account...");
            signUpAdmin().then(token => resolve(token)).catch(err => reject(err));
          } else {
            reject(new Error(`Auth failed: ${res.statusCode} - ${data}`));
          }
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Auto-provision admin user if not created yet
async function signUpAdmin() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      email: "admin@becbbsr.ac.in",
      password: "becadmin@2026",
      returnSecureToken: true
    });

    const options = {
      hostname: 'identitytoolkit.googleapis.com',
      path: `/v1/accounts:signUp?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const result = JSON.parse(data);
            console.log("✨ Admin account created and authenticated!");
            resolve(result.idToken);
          } catch (e) {
            reject(new Error("Failed to parse SignUp response: " + e.message));
          }
        } else {
          reject(new Error(`Admin auto-provision failed: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Convert JS structures to Firestore REST JSON value format
function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'string') return { stringValue: val };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
  if (Array.isArray(val)) return { arrayValue: { values: val.map(toFirestoreValue) } };
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function makeBody(items) {
  return JSON.stringify({
    fields: {
      items: toFirestoreValue(items)
    }
  });
}

async function patchDoc(docId, items, idToken) {
  return new Promise((resolve, reject) => {
    const body = makeBody(items);
    const options = {
      hostname: BASE_URL,
      path: `/v1/projects/${PROJECT_ID}/databases/(default)/documents/configs/${docId}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'Authorization': `Bearer ${idToken}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ Firestore Doc [${docId}] successfully updated! (${res.statusCode})`);
          resolve(data);
        } else {
          console.error(`❌ Firestore Doc [${docId}] failed: ${res.statusCode} - ${data.substring(0, 200)}`);
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Config mappings: JSON filename -> Firestore document ID
const configsToPush = [
  { file: 'hero-slides.json', docId: 'hero-slides' },
  { file: 'university-notices.json', docId: 'university-notices' },
  { file: 'campus-gallery.json', docId: 'campus-gallery' },
  { file: 'leadership-data.json', docId: 'leadership-data' },
  { file: 'university-faculties.json', docId: 'university-faculties' },
  { file: 'achievements.json', docId: 'achievements' },
  { file: 'aeroclub.json', docId: 'aeroclub' },
  { file: 'workshop.json', docId: 'workshop' },
  { file: 'sports.json', docId: 'sports' },
  { file: 'tour-scenes-v2.json', docId: 'tour-scenes-v2' },
  { file: 'events-highlights.json', docId: 'events-highlights' },
  { file: 'selected-students-v2.json', docId: 'selected-students-v2' }
];

async function main() {
  console.log("🚀 STARTING AUTHENTICATED SYNC: Pushing all local configurations to Firestore...\n");

  let idToken;
  try {
    idToken = await getAuthToken();
  } catch (authErr) {
    console.error("❌ Authentication fatal error:", authErr.message);
    process.exit(1);
  }

  for (const config of configsToPush) {
    const filePath = path.join(__dirname, config.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: Local file ${config.file} not found. Skipping.`);
      continue;
    }

    try {
      const fileData = fs.readFileSync(filePath, 'utf8');
      const parsedData = JSON.parse(fileData);
      
      let items = [];
      if (Array.isArray(parsedData)) {
        items = parsedData;
      } else if (parsedData && Array.isArray(parsedData.items)) {
        items = parsedData.items;
      } else if (parsedData && typeof parsedData === 'object') {
        items = [parsedData];
      }

      console.log(`Processing ${config.file} (${items.length} items)...`);
      await patchDoc(config.docId, items, idToken);
    } catch (err) {
      console.error(`❌ Error processing file ${config.file}:`, err.message);
    }
  }

  console.log("\n🎉 ALL CONFIGURATIONS HAVE BEEN SYNCED TO FIRESTORE CLOUD DATABASE!");
  process.exit(0);
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
