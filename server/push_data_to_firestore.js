// Script to push all default data to Firestore
// Run: node push_data_to_firestore.js

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAM4mbEIHcTUMNr7l4huOCOalFRKjGUIU4",
  authDomain: "becbbsr-90a44.firebaseapp.com",
  projectId: "becbbsr-90a44",
  storageBucket: "becbbsr-90a44.firebasestorage.app",
  messagingSenderId: "379108510831",
  appId: "1:379108510831:web:d439fda6481e2c9359519a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ========== ALL DATA ==========

const studentsData = [
  { id: "1", companyRole: "CTTC-BBSR", name: "ANKIT MOHAPATRA", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tata.jpg", photo: "/images/alumni2.jpg", bgColor: "from-blue-600 to-cyan-500" },
  { id: "2", companyRole: "TECH MAHINDRA", name: "PRIYA PATEL", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "₹6.5 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629446/becweb/Tech.png", photo: "", bgColor: "from-emerald-600 to-teal-500" },
  { id: "3", companyRole: "INFOSYS", name: "RAHUL KUMAR SAHU", branch: "ECE", degree: "BTech", batch: "2024", packageInfo: "₹5.0 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629416/becweb/Infosys.png", photo: "", bgColor: "from-purple-600 to-pink-500" },
  { id: "4", companyRole: "TCS", name: "SNEHA MISHRA", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "₹7.5 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629444/becweb/tcs.png", photo: "", bgColor: "from-orange-600 to-red-500" },
  { id: "5", companyRole: "AIRDIT SOFTWARE", name: "SUMAN NAYAK", branch: "AERO", degree: "BTech", batch: "2024", packageInfo: "₹12.0 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629401/becweb/Airdit.jpg", photo: "", bgColor: "from-cyan-600 to-blue-500" },
  { id: "6", companyRole: "DAIKIN", name: "RAJESH BEHERA", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "₹5.8 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629408/becweb/Daikin.png", photo: "", bgColor: "from-teal-600 to-cyan-500" },
  { id: "7", companyRole: "WIPRO", name: "DEEPA RANI DASH", branch: "CSE", degree: "BTech", batch: "2023", packageInfo: "₹5.5 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629459/becweb/wipro2018.png", photo: "", bgColor: "from-indigo-600 to-violet-500" },
  { id: "8", companyRole: "ACCENTURE", name: "BIKASH SAHOO", branch: "ECE", degree: "BTech", batch: "2023", packageInfo: "₹9.5 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629399/becweb/accenture.png", photo: "", bgColor: "from-rose-600 to-pink-500" },
  { id: "9", companyRole: "IBM", name: "ALISHA SHARMA", branch: "CSE", degree: "BTech", batch: "2023", packageInfo: "₹12.0 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629412/becweb/IBM.png", photo: "", bgColor: "from-slate-600 to-gray-500" },
  { id: "10", companyRole: "CAPGEMINI", name: "GOPAL KRISHNA RATH", branch: "AERO", degree: "BTech", batch: "2023", packageInfo: "₹7.2 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629404/becweb/Capgemini.png", photo: "", bgColor: "from-blue-600 to-indigo-500" },
  { id: "11", companyRole: "JOHNNETTE TECH", name: "BIBHUDATTA PANDA", branch: "AERO", degree: "BTech", batch: "2024", packageInfo: "₹11.0 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629424/becweb/Johnnette_Technologies.png", photo: "", bgColor: "from-amber-600 to-orange-500" },
  { id: "12", companyRole: "NUCON AEROSPACE", name: "SUBHASHREE PATRO", branch: "AERO", degree: "BTech", batch: "2023", packageInfo: "₹9.5 LPA", companyLogo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629429/becweb/neucon-aero.png", photo: "", bgColor: "from-green-600 to-emerald-500" }
];

const workshopData = [
  { id: "1", title: "National Level Workshop on Blockchain Technology", desc: "A 2-day national level workshop exploring blockchain fundamentals, smart contracts, and decentralized applications.", photo: "/photogallery/1716785118532.jpg", date: "2026-04-02", category: "Technology" },
  { id: "2", title: "Workshop on Machine Learning & AI", desc: "Hands-on sessions covering supervised learning, neural networks, and deployment of ML models.", photo: "/photogallery/1716785130518.jpg", date: "2026-03-15", category: "AI/ML" },
  { id: "3", title: "CATIA V5 & Solid Works Training", desc: "Industry-standard CAD software training for Mechanical and Aeronautical engineering students.", photo: "/photogallery/1716784336322.jpg", date: "2026-02-20", category: "Design" },
  { id: "4", title: "PCB Design & Embedded Systems Workshop", desc: "Practical workshop on designing printed circuit boards and programming embedded microcontrollers.", photo: "/photogallery/1674270022218.jpg", date: "2026-01-18", category: "Electronics" },
  { id: "5", title: "Python for Data Science Bootcamp", desc: "3-day intensive bootcamp covering Python programming, data analysis with Pandas, and visualization.", photo: "/photogallery/20230121_095905_017.jpg", date: "2025-12-10", category: "Programming" },
  { id: "6", title: "Civil Engineering Site Visits & Workshop", desc: "Field visits and practical sessions on construction management, site safety, and modern building technologies.", photo: "/photogallery/20230120_100045_017.jpg", date: "2025-11-22", category: "Civil" },
  { id: "7", title: "Drone Technology & UAV Workshop", desc: "Comprehensive hands-on workshop covering drone assembly, flight mechanics, and applications in surveillance.", photo: "/photogallery/bec-aero-club.jpg", date: "2025-10-05", category: "Aeronautical" },
  { id: "8", title: "Cyber Security & Ethical Hacking", desc: "Workshop on ethical hacking techniques, network security, penetration testing, and cybersecurity best practices.", photo: "/photogallery/WhatsApp%20Image%202024-05-28%20at%2008.23.08.jpeg", date: "2025-09-14", category: "Technology" }
];

const sportsData = [
  { id: "1", photo: "/photogallery/20230121_095905_017.jpg", title: "Sports Meet 2023" },
  { id: "2", photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.45%20PM%20(1).jpeg", title: "Cricket Tournament" },
  { id: "3", photo: "/photogallery/20230120_100045_017.jpg", title: "Athletics Event" },
  { id: "4", photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.47%20PM.jpeg", title: "Team Spirit" },
  { id: "5", photo: "/photogallery/20230119_094521.jpg", title: "Football Match" },
  { id: "6", photo: "/photogallery/1674270022218.jpg", title: "Sports Day Highlights" },
  { id: "7", photo: "/photogallery/IMG_20230119_20200709.jpg", title: "Indoor Games" },
  { id: "8", photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.48%20PM%20(1).jpeg", title: "Championship 2023" },
  { id: "9", photo: "/photogallery/1716785118532.jpg", title: "Track and Field 2024" },
  { id: "10", photo: "/photogallery/1716785130518.jpg", title: "Outdoor Sports 2024" },
  { id: "11", photo: "/photogallery/1716784336322.jpg", title: "Annual Meet 2024" },
  { id: "12", photo: "/photogallery/WhatsApp%20Image%202024-05-28%20at%2008.23.08.jpeg", title: "Sports Excellence 2024" }
];

const aeroclubData = [
  { id: "1", title: "BEC Aero Club Activities", desc: "Students and faculty engaging in aeronautical design and testing activities at the campus hangar.", photo: "/photogallery/bec-aero-club.jpg", date: "2024-05-20", category: "Event" },
  { id: "2", title: "Aero Modeling Sessions", desc: "Hands-on experience in building scale models and remote-controlled aircraft.", photo: "/photogallery/bec-aero-club1.jpg", date: "2024-05-18", category: "Workshop" },
  { id: "3", title: "Aircraft Maintenance Training", desc: "Practical training on aircraft systems and maintenance protocols for students.", photo: "/photogallery/bec-aero-club2.jpg", date: "2024-05-15", category: "Training" },
  { id: "4", title: "RC Aircraft Design Contest", desc: "Annual design competition featuring custom-built remote controlled planes by engineering students.", photo: "/photogallery/bec-aero-club3.jpg", date: "2024-05-12", category: "Competition" },
  { id: "5", title: "Field Testing Day", desc: "Outdoor testing session for quadcopters and fixed-wing drones developed in-house.", photo: "/photogallery/bec-aero-club1-1.jpg", date: "2024-05-10", category: "Event" },
  { id: "6", title: "Aero Engineering Workshop", desc: "Advanced workshop on aerodynamics and fluid dynamics models.", photo: "/photogallery/bec-aero-club3-3.jpg", date: "2024-05-08", category: "Workshop" },
  { id: "7", title: "Campus Aero Exhibition", desc: "Showcasing student projects to visiting industry experts and researchers.", photo: "/photogallery/bec-aero-club.jpg", date: "2024-05-05", category: "Event" },
  { id: "8", title: "Drone Mapping Session", desc: "Using autonomous flight systems for campus mapping and surveillance training.", photo: "/photogallery/bec-aero-club2.jpg", date: "2024-05-02", category: "Training" },
  { id: "9", title: "Propulsion System Lab", desc: "Deep dive into aircraft engine mechanics and propulsion technology.", photo: "/photogallery/bec-aero-club1.jpg", date: "2024-04-28", category: "Training" },
  { id: "10", title: "Aviation Research Forum", desc: "Biannual forum discussing future trends in sustainable aviation and drone swarm tech.", photo: "/photogallery/bec-aero-club3.jpg", date: "2024-04-25", category: "Event" },
  { id: "11", title: "Hangar Facility Overview", desc: "Comprehensive walkthrough of our on-campus aeronautical hangar and labs.", photo: "/photogallery/bec-aero-club1-1.jpg", date: "2024-04-22", category: "Event" },
  { id: "12", title: "Aeronautical Team Session", desc: "Collaborative project session for our university's aeronautical engineering teams.", photo: "/photogallery/bec-aero-club3-3.jpg", date: "2024-04-20", category: "Event" }
];

async function pushAllData() {
  console.log("Pushing all data to Firestore...");

  try {
    // Push Students / Placement Records
    await setDoc(doc(db, "configs", "selected-students-v2"), { items: studentsData });
    console.log("✅ Students/Placement data pushed!");

    // Push Workshop
    await setDoc(doc(db, "configs", "workshop"), { items: workshopData });
    console.log("✅ Workshop data pushed!");

    // Push Sports
    await setDoc(doc(db, "configs", "sports"), { items: sportsData });
    console.log("✅ Sports data pushed!");

    // Push Aeroclub
    await setDoc(doc(db, "configs", "aeroclub"), { items: aeroclubData });
    console.log("✅ Aeroclub data pushed!");

    console.log("\n✅✅ ALL DATA PUSHED TO FIRESTORE SUCCESSFULLY!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

pushAllData();
