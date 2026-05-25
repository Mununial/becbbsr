import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Search, Building2, Trophy, Award, ChevronRight, Download, GraduationCap, Sparkles, Zap, Target } from 'lucide-react';

interface Company {
  name: string;
  logo: string;
  branches: string;
  stats?: string;
  package?: string;
}

interface YearData {
  year: string;
  companies: Company[];
}

const PlacementCompanyLogo = ({ src, name }: { src: string; name: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src || src.startsWith('/images/')) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl text-primary text-[10px] font-black uppercase tracking-wider text-center p-2 truncate border border-slate-100 select-none">
        {name}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={name} 
      className="w-full h-full object-contain transition-all duration-700"
      onError={() => setHasError(true)}
    />
  );
};

const PLACEMENT_DATA: YearData[] = [
  {
    year: "2026 (Live)",
    companies: [
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629446/becweb/Tech.png", branches: "CSE,ECE,EE,AERO,CIVIL,MECHANICAL", stats: "42", package: "4.5-8.2" },
      { name: "INFOSYS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629416/becweb/Infosys.png", branches: "AERO,MECHANICAL,CSE,CIVIL,EE", stats: "28", package: "4.0-9.2" },
      { name: "IBS SOFTWARE", logo: "/images/events/IBS.jpg", branches: "CSE,EE,EEE,AERO", stats: "15", package: "4.5-7.5" },
      { name: "TATA STEEL", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629443/becweb/TATA_STEEL.png", branches: "MECHANICAL,EE,EEE,CIVIL", stats: "18", package: "3.8-6.5" },
      { name: "INTERGLOBE (INDIGO)", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629401/becweb/Airdit.jpg", branches: "AERONAUTICAL,CSE,MECH", stats: "12", package: "4.0-10.0" },
      { name: "BYJU'S", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629352/becweb/180074byjus2019.jpg", branches: "MBA,CSE,CE,MECH", stats: "22", package: "6.0-12.0" },
      { name: "ZETA", logo: "/images/events/zeta.jpg", branches: "CSE,IT", stats: "08", package: "8.5-14.0" },
      { name: "GENPACT", logo: "/images/events/genpact.jpg", branches: "MBA,CSE", stats: "14", package: "3.5-5.5" },
      { name: "JOHNNETTE TECHNOLOGIES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629424/becweb/Johnnette_Technologies.png", branches: "AERONAUTICAL", stats: "05", package: "5.0-11.0" },
      { name: "QH", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776627784/bec_web_assets/cawqhapwvzlogvzsjbka.jpg", branches: "MECHANICAL,EE", stats: "09", package: "3.2-4.8" },
      { name: "PNB METLIFE", logo: "/images/events/pnblifetime.jpg", branches: "MBA", stats: "07", package: "4.2-6.0" }
    ]
  },
  {
    year: "2024",
    companies: [
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629446/becweb/Tech.png", branches: "CSE,ECE,EE,AERO,CIVIL,MECHANICAL", stats: "42", package: "4.5-8.2" },
      { name: "TCS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629444/becweb/tcs.png", branches: "AERO,MECHANICAL,CSE,CIVIL,EE,ECE", stats: "38", package: "3.8-7.5" },
      { name: "HDPL Diamond Tools Co.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629410/becweb/HDPL.jpg", branches: "MECHANICAL,EE,EEE", stats: "12", package: "4.2-6.0" },
      { name: "QSPIDERS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629433/becweb/Qspiders.png", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "25", package: "3.5-5.5" },
      { name: "AIRDIT SOFTWARE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629401/becweb/Airdit.jpg", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "18", package: "5.0-12.0" },
      { name: "PIRAMAL GROUP", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629432/becweb/Piramal.png", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "15", package: "4.8-9.0" },
      { name: "INFOSYS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629416/becweb/Infosys.png", branches: "AERO,MECHANICAL,CSE,CIVIL,EE,ECE", stats: "22", package: "4.0-9.2" },
      { name: "DEBNAR CORPSOL PVT LTD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629455/becweb/Untitled6.jpg", branches: "AERO,MECHANICAL,CIVIL", stats: "08", package: "3.2-5.4" },
      { name: "WURTH INDIA PVT LTD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629453/becweb/Untitled5.png", branches: "EE,MECHANICAL", stats: "06", package: "3.5-4.8" },
      { name: "AJATUS SOFTWARE PVT LTD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629456/becweb/Untitled6.png", branches: "CSE,ECE,EE,MECHANICAL", stats: "14", package: "4.0-7.2" },
      { name: "DAIKIN AIR-CONDITIONING", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629408/becweb/Daikin.png", branches: "AERO,MECHANICAL,CSE,EE,ECE", stats: "10", package: "4.5-8.0" },
      { name: "SAKURA AUTO PARTS INDIA PVT LTD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629436/becweb/Sakura.jpg", branches: "CSE,ECE,EE,MECHANICAL", stats: "07", package: "3.8-5.2" },
      { name: "PANASONIC LIFE SOLUTIOS PVT LTD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629452/becweb/Untitled4.png", branches: "ECE,EE,EE,MECHANICAL", stats: "09", package: "4.2-7.5" },
      { name: "MRF TYRES LTD.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629451/becweb/Untitled3.png", branches: "CSE,ECE,EE,MECHANICAL", stats: "11", package: "3.5-6.8" },
      { name: "OBEN ELECTRIC(EV)", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629450/becweb/Untitled1.png", branches: "CSE,ECE,EE,MECHANICAL", stats: "05", package: "4.0-9.0" },
      { name: "ATHER", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629457/becweb/Untitled8.png", branches: "EE,EEE,MECHANICAL", stats: "04", package: "4.5-10.0" }
    ]
  },
  {
    year: "2023",
    companies: [
      { name: "TCS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629444/becweb/tcs.png", branches: "CSE,ECE,EE,AERO,CIVIL,MECHANICAL", stats: "35", package: "3.6-7.2" },
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629446/becweb/Tech.png", branches: "AERO,MECHANICAL,CSE,CIVIL,EE", stats: "30", package: "4.2-7.8" },
      { name: "QSPIDERS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629433/becweb/Qspiders.png", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "20", package: "3.2-5.0" },
      { name: "AIRDIT SOFTWARE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629401/becweb/Airdit.jpg", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "15", package: "4.8-11.0" },
      { name: "PIRAMAL GROUP", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629432/becweb/Piramal.png", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "12", package: "4.5-8.5" },
      { name: "INFOSYS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629416/becweb/Infosys.png", branches: "AERO,MECHANICAL,CSE,CIVIL,EE", stats: "18", package: "3.8-8.8" },
      { name: "HDPL Diamond Tools Co.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629410/becweb/HDPL.jpg", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "10", package: "4.0-5.8" },
      { name: "Capgemini", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629404/becweb/Capgemini.png", branches: "AERO,MECHANICAL,CIVIL", stats: "14", package: "4.2-7.5" },
      { name: "Rane Group", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629435/becweb/Rane.png", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "08", package: "3.5-5.2" },
      { name: "Krishna Maruti Ltd", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629425/becweb/Krishna.jpg", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "06", package: "3.2-4.8" },
      { name: "IDFC First Bank", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629414/becweb/IDFC.png", branches: "CSE,ECE,EE,MECHANICAL,AERO", stats: "12", package: "4.0-6.5" },
      { name: "THRIVENI EARTHMOVERS PVT", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629449/becweb/Thriveni.jpg", branches: "MECHANICAL", stats: "04", package: "4.5-7.2" },
      { name: "DAIKIN AIR-CONDITIONING", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629408/becweb/Daikin.png", branches: "AERO,MECHANICAL,CSE,EE", stats: "09", package: "4.2-7.8" },
      { name: "SAKURA AUTO PARTS INDIA PVT LTD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629436/becweb/Sakura.jpg", branches: "CSE,ECE,EE", stats: "05", package: "3.6-5.0" },
      { name: "ACCENTURE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629399/becweb/accenture.png", branches: "CSE,ECE,EE,MECHANICAL", stats: "16", package: "4.5-9.5" },
      { name: "SPARC", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629442/becweb/sparc.png", branches: "CIVIL", stats: "03", package: "3.2-4.5" },
      { name: "IBM", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629412/becweb/IBM.png", branches: "CSE,ECE,EE,MECHANICAL", stats: "14", package: "4.8-12.0" }
    ]
  },
  {
    year: "2022",
    companies: [
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629448/becweb/Tech_Mahindra-Logo.wine.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "28", package: "4.0-7.5" },
      { name: "TCS", logo: "/company-logo/TCS.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "25", package: "3.5-7.0" },
      { name: "AIRDIT SOFTWARE", logo: "/company-logo/Airdit Software.jfif", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "12", package: "4.5-10.0" },
      { name: "WIPRO", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629459/becweb/wipro2018.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "20", package: "3.2-6.5" },
      { name: "CONNEQT BUSINESS SOLUTION", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629405/becweb/Conneqt_Business_Solution.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "15", package: "3.0-4.5" },
      { name: "ACCENTURE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629399/becweb/accenture.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "18", package: "4.2-8.5" },
      { name: "PIRAMAL GROUP", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629431/becweb/Piramal_Group.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "10", package: "4.0-7.8" },
      { name: "MINDFIRE SOLUTIONS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629427/becweb/Mindfire_Solutions.png", branches: "CSE,EEE", stats: "06", package: "4.5-9.0" },
      { name: "SONALIKA GROUP", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629438/becweb/Sonalika_Group.png", branches: "MECH", stats: "08", package: "3.5-5.5" },
      { name: "JOHNNETTE TECHNOLOGIES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629424/becweb/Johnnette_Technologies.png", branches: "AERONAUTICAL", stats: "04", package: "4.0-10.0" },
      { name: "IXAR Ltd.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629419/becweb/IXAR_Ltd..png", branches: "MECHANICAL", stats: "05", package: "3.8-6.2" },
      { name: "HP Inc.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629411/becweb/HP_Inc..png", branches: "CSE,EE,AERO,MECH", stats: "07", package: "4.8-11.5" },
      { name: "INFOSYS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629417/becweb/Infosys.png", branches: "CSE,EEE,AERONAUTICAL", stats: "14", package: "3.6-8.5" },
      { name: "FINE COMPONENTS & TOOLS Pvt. Ltd", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629409/becweb/FINE_COMPONENTS_TOOLS_Pvt._Ltd.jpg", branches: "MECH,EE", stats: "10", package: "3.2-4.8" },
      { name: "NIROG INDIA Pv. Ltd.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629430/becweb/nirog-logo.png", branches: "CSE,EEE,AERONAUTICAL", stats: "09", package: "4.0-7.2" },
      { name: "ITNOW", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629418/becweb/ITnow.png", branches: "CSE,EE,AERO,MECH", stats: "12", package: "3.5-6.0" },
      { name: "SPARC Pvt. Ltd.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629439/becweb/sparc-logo.svg", branches: "CIVIL", stats: "05", package: "3.2-5.0" },
      { name: "QSPIDERS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629434/becweb/Qspiders.png", branches: "CSE,EEE,AERO,CIVIL,MECH", stats: "22", package: "3.0-4.8" },
      { name: "NUCON AEROSPACE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629429/becweb/neucon-aero.png", branches: "AERONAUTICAL", stats: "06", package: "4.5-9.5" },
      { name: "SANJEEV AUTO PARTS MANUFACTURERS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629437/becweb/sanjeev-logo.png", branches: "EEE,MECH", stats: "08", package: "3.5-5.5" }
    ]
  },
  {
    year: "2021",
    companies: [
      { name: "NUCON AEROSPACE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629429/becweb/neucon-aero.png", branches: "AERONAUTICAL", stats: "10", package: "4.2-8.5" },
      { name: "CYRRUP", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629407/becweb/CYRRUP.jpg", branches: "CSE,ETC,EEE", stats: "05", package: "3.8-6.0" },
      { name: "TCS", logo: "/company-logo/TCS.png", branches: "AERONAUTICAL,MECH,CSE,ETC,EEE,CIVIL", stats: "22", package: "3.5-7.2" },
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629448/becweb/Tech_Mahindra-Logo.wine.png", branches: "AERONAUTICAL,MECH,CSE,ETC,EEE,CIVIL", stats: "18", package: "4.0-7.8" },
      { name: "RSB TRANSMISSION", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629415/becweb/images.png", branches: "MECH,EEE", stats: "12", package: "3.2-4.5" },
      { name: "SANJEEV AUTO PARTS", logo: "/company-logo/Sanjeev Auto Parts Manufacturers.jfif", branches: "EEE,MECH", stats: "08", package: "3.5-5.0" },
      { name: "CORECARD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629406/becweb/CORECARD.jpg", branches: "CSE,ETC,EEE,MECH,AERO", stats: "06", package: "4.5-9.2" },
      { name: "SGS TECHNOLOGIE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629356/becweb/2019-sgs.jpg", branches: "AERO,CSE,ETC,EE,EEE,MECH", stats: "12", package: "3.5-5.0" },
      { name: "CAPGEMINI", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629426/becweb/logo-capg.jpg", branches: "CSE,ETC,EEE,AERO", stats: "15", package: "4.0-7.2" },
      { name: "QSPIDERS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629434/becweb/Qspiders.png", branches: "CSE,ETC,EE,EEE,MECH,AERO" },
      { name: "CALYPSO", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629403/becweb/CALYPSO.png", branches: "CSE,ETC,EE,EEE,MECH,AERO" },
      { name: "JAY BHARAT MARUTI", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629421/becweb/JAY_BHARAT_MARUTI.png", branches: "EEE,MECH,CIVIL" },
      { name: "TATA STEEL", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629443/becweb/TATA_STEEL.png", branches: "EE,EEE,MECH,AERO" },
      { name: "VIJAY LAXMI CONSTRUCTION", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629458/becweb/VIJAY_LAXMI_CONSTRUCTION.png", branches: "CIVIL" },
      { name: "JINDAL STEEL AND POWER", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629423/becweb/JINDAL_STEEL_AND_POWER.png", branches: "EEE,EE,MECH" },
      { name: "AXIS BANK", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629402/becweb/AXIS_BANK.png", branches: "CSE,ETC,EE,EEE,MECH,AERO,CIVIL" },
      { name: "JARO EDUCATION", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629420/becweb/jaro2018.jpg", branches: "AERO,CSE,CIVIL,EE,EEE,ETC,MECH" },
      { name: "WIPRO", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629459/becweb/wipro2018.png", branches: "CSE,EE,EEE,ETC" },
      { name: "INFOSYS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629417/becweb/Infosys.png", branches: "AERO,CSE,CIVIL,EE,EEE,ETC,MECH" },
      { name: "ICICI BANK", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629413/becweb/ICICIBANK.jpg", branches: "ALL", stats: "05", package: "4.0-6.0" },
      { name: "MOLEX INDIA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629428/becweb/MOLEX_INDIA.png", branches: "EE,EEE,MECH", stats: "04", package: "3.5-5.2" }
    ]
  },
  {
    year: "2020",
    companies: [
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629354/becweb/1839802019-tech.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL", stats: "15", package: "3.8-6.2" },
      { name: "JARO EDUCATION", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629390/becweb/867353jaro2018.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "FCI-CCM", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629382/becweb/645665FCI.jpg", branches: "CSE,EEE,EE,ETC" },
      { name: "TCS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629348/becweb/135706tata2018.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "WIPRO", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629357/becweb/221910wipro2018.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "NET TANTRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629375/becweb/515520hub-nettantra-logo-2019.png", branches: "CSE,ETC" },
      { name: "EDUPOLIS TECHNOLOGIES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629360/becweb/347324edupolis.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "CAPGEMINI", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629376/becweb/516405logo-capg.jpg", branches: "CSE,ETC,EE,EEE" },
      { name: "3rd.Life", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629387/becweb/773795download.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "EZTRUCK", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629397/becweb/963687eztruck.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "UNANIMITY INFO", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629359/becweb/306221UNANIMITY.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "SMARTLINK SOLUTIONS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629387/becweb/77484smart.png", branches: "CSE,EEE,EE,ETC" },
      { name: "SAKROBOTIX LABS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629355/becweb/187611sak.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "AJATUS SOFTWARE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629365/becweb/426998ajatus2018.jpg", branches: "CSE,EEE,EE,ETC" }
    ]
  },
  {
    year: "2019",
    companies: [
      { name: "ORISSA DIESEL ENGINES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629392/becweb/872357odisha.jpg", branches: "MECH,MBA" },
      { name: "TEK SYSTEMS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629369/becweb/474448TEK.jpg", branches: "CSE" },
      { name: "TCS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629386/becweb/720181tata2018.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "TECH MAHINDRA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629366/becweb/4467712019-tech.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "FSS TECHNOLOGY", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629394/becweb/904764ak-fss-logo.png", branches: "CSE" },
      { name: "JARO EDUCATION", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629388/becweb/820269jaro2018.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "SAKROBOTIX", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629380/becweb/634466sak.jpg", branches: "CS,ETC,MECH,EEE" },
      { name: "AJATUS SOFTWARE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629379/becweb/565442ajatus2018.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "WIPRO", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629393/becweb/895884wipro2018.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "E SQUARE SYSTEM", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629398/becweb/999969ESQUARE.png", branches: "CSE,ETC,EEE" },
      { name: "VIZIONEX IMACT SOLUTIONS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629389/becweb/839524vizionx-2018.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL,MBA" },
      { name: "ROYAL ENFIELD", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629395/becweb/941564Royal-Enfield-Logo-Design-Crest-Monogram-motorbikes-livery.jpg", branches: "MECH,AERO,CIVIL" },
      { name: "NLMK INDIA", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629383/becweb/655918NLMK.jpg", branches: "MECH,AERO,CIVIL" },
      { name: "COGNIZANT", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629374/becweb/506946COG.png", branches: "CSE,ETC,MECH,EEE" },
      { name: "BYJU'S", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629352/becweb/180074byjus2019.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL,MBA" },
      { name: "QSPIDERS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629434/becweb/Qspiders.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL,MBA" },
      { name: "CSM TECHNOLOGIES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629378/becweb/555616CSM.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL,MBA" },
      { name: "BACS ENERGY PVT. LTD.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629358/becweb/306069bacs2019.jpg", branches: "CSE,ETC" },
      { name: "SANJEEV AUTO PVT. LTD.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629363/becweb/40165SANJ.jpg", branches: "MECH" },
      { name: "SGS TECHNOLOGIES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629396/becweb/958805sgs.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL,MBA" },
      { name: "EMCURE PHARMACEUTICALS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629373/becweb/493275EM.jpg", branches: "MECH,ETC,EE,EEE" },
      { name: "ICICI BANK", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629377/becweb/55117ICICIBANK.jpg", branches: "MBA" }
    ]
  },
  {
    year: "2018",
    companies: [
      { name: "SGS TECHNICAL SERVICES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629367/becweb/449640sgs.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "RANE GROUP", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629384/becweb/694030rane.png", branches: "MECH,AERO" },
      { name: "VIZIONEX IMACT SOLUTIONS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629368/becweb/461906vis.png", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "TRIAYAAM SOFTWARE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629361/becweb/36625triayaam.png", branches: "CSE,EEE,ETC" },
      { name: "TEXMO INDUSTRIES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629350/becweb/169394tex.png", branches: "MECH,AERO" },
      { name: "MAPLE CONSTRUCTIONS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629349/becweb/152245map.jpg", branches: "CIVIL" },
      { name: "SPARC Pvt. Ltd.", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629439/becweb/sparc-logo.svg", branches: "CIVIL" },
      { name: "CPC DIAGNOSTICS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629364/becweb/419400cpc.png", branches: "ETC,EE,EEE" },
      { name: "DRUBUS TECHNOLOGY", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629372/becweb/491872drubus-logo.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "PRABHODITA SERVICES", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629381/becweb/644231PRABHODITA-2018.png", branches: "CIVIL" },
      { name: "MIRACLE SOFTWARE SYSTEMS", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629351/becweb/17188miracle11.jpg", branches: "CSE,ETC,EEE,EE,MECH,AERO,CIVIL" },
      { name: "LABOURNET", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629384/becweb/672792labournet.jpg", branches: "CIVIL" },
      { name: "KSPG AUTOMOTIVE", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629370/becweb/489583kspg-automotive-india-pvt-ltd-vadgaon-maval-pune-piston-dealers-2kogtvh.jpg", branches: "MECH" },
      { name: "BACS HI-TECH ENGINEERING", logo: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629362/becweb/379517bacs-logo-2018.jpg", branches: "MECH,EE,EEE" }
    ]
  }
];

// Initial static data as fallback
export const Placement = () => {
  const [selectedYear, setSelectedYear] = useState("2026 (Live)");
  const [searchQuery, setSearchQuery] = useState("");

  const currentYearData = PLACEMENT_DATA.find(d => d.year === selectedYear);
  const filteredCompanies = currentYearData?.companies.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.branches.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-poppins selection:bg-cyan-500/30">
      <SEO 
        title="Placement Records & Recruiter Partners | BEC Bhubaneswar"
        description="Explore the exceptional placement records of Bhubaneswar Engineering College (BEC). Our B.Tech, MBA &amp; Diploma graduates placed in top MNCs like Amazon, Tata Steel, Tech Mahindra, Infosys, and InterGlobe."
        keywords={[
          "engineering college with best placement in Odisha",
          "Bhubaneswar Engineering College placement",
          "BEC placements record",
          "top recruiters BEC Bhubaneswar",
          "best placement engineering colleges in Bhubaneswar",
          "BTech jobs Odisha",
          "management placements Bhubaneswar",
          "BEC corporate relations cell"
        ]}
        schema={{
          "@type": "WebPage",
          "name": "Placement Records - Bhubaneswar Engineering College",
          "description": "Information on recruitment events, statistics, average packages, and top recruiter partners at Bhubaneswar Engineering College (BEC).",
          "url": "https://becbbsr.ac.in/placement"
        }}
      />
      <Navbar onAdminClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      
      {/* Hero Section - Elevated SaaS Style */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-navy-950">
        {/* Futurist background elements */}
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" className="w-full h-full object-cover opacity-15 scale-105 blur-[2px]" alt="" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-cyan-900/40" />
          
          {/* Animated Glow Shapes */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse duration-[3000ms]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                Recruitment 2024 Live
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter mb-10"
              >
                The Future in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">Motion.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="text-lg text-white/50 font-medium max-w-2xl leading-relaxed mb-14 uppercase tracking-widest text-[11px]"
              >
                BEC’s career ecosystem bridges the gap between academic brilliance and global industry demand. We build more than careers; we build legacies.
              </motion.p>

              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                {[
                  { val: "500+", lab: "Global Recruiters", icon: Building2, color: "text-cyan-400" },
                  { val: "92%", lab: "Placement Rate", icon: Target, color: "text-primary" },
                  { val: "₹12.5L", lab: "Max CTC (2024)", icon: Zap, color: "text-yellow-400" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex flex-col gap-2 p-1 border-l-2 border-white/10 pl-6"
                  >
                    <div className="text-3xl font-black text-white tracking-tighter">{stat.val}</div>
                    <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.25em]">{stat.lab}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.4 }}
              className="flex-1 w-full max-w-xl group relative"
            >
               {/* Cyber Card Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="relative glass-card bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 shadow-2xl">
                  <div className="flex justify-between items-center mb-12">
                     <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                     <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Real-time Feed
                     </span>
                  </div>

                  <div className="space-y-6">
                     {[
                       { name: 'Tech Mahindra', salary: '₹8.2 LPA', stat: '+42 Selected', trend: '+12%' },
                       { name: 'TCS', salary: '₹7.5 LPA', stat: '+38 Selected', trend: '+8%' },
                       { name: 'Airdit Software', salary: '₹12.0 LPA', stat: 'Ongoing', trend: 'Hot' }
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center p-6 rounded-3xl bg-white/5 border border-white/5 shadow-2xl shadow-black/20 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                          <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-cyan-400"><Building2 className="w-6 h-6" /></div>
                            <div>
                              <div className="text-sm font-black text-white uppercase tracking-tight">{item.name}</div>
                              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.salary}</div>
                            </div>
                          </div>
                          <div className="text-right">
                             <div className="text-[11px] font-black text-cyan-400">{item.stat}</div>
                             <div className="text-[9px] font-bold text-green-400 uppercase">{item.trend}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruiter Showcase - Logo Wall */}
      <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center mb-12">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Trusted by Industry Leaders</span>
              <h2 className="text-3xl font-black text-navy-950 uppercase tracking-tighter italic">Elite Partner <span className="text-primary italic">Network</span></h2>
           </div>
           
           <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-60 hover:opacity-100 transition-opacity duration-700 max-w-6xl mx-auto">
               {[
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629459/becweb/wipro2018.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629446/becweb/Tech.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629416/becweb/Infosys.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629401/becweb/Airdit.jpg",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629443/becweb/TATA_STEEL.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629433/becweb/Qspiders.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629352/becweb/180074byjus2019.jpg",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629405/becweb/Conneqt_Business_Solution.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629424/becweb/Johnnette_Technologies.png",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776627784/bec_web_assets/cawqhapwvzlogvzsjbka.jpg",
                 "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629414/becweb/IDFC.png"
               ].map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="h-12 md:h-16 shrink-0"
                >
                   <img 
                     src={logo} 
                     className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                     alt="Recruiter Logo" 
                   />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Main Archive Section */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-cyan-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6"
              >
                <div className="w-12 h-[2px] bg-cyan-600" />
                Archival Records
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-black text-navy-950 tracking-tighter mb-8 leading-[1]">
                Success in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-primary">Numbers.</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {PLACEMENT_DATA.map(d => (
                  <button 
                    key={d.year}
                    onClick={() => setSelectedYear(d.year)}
                    className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                      selectedYear === d.year 
                      ? 'bg-navy-950 text-white border-navy-950 shadow-2xl shadow-navy-950/20 scale-105' 
                      : 'bg-white text-navy-950/40 border-slate-200 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50'
                    }`}
                  >
                    {d.year}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-6">
               <div className="relative group min-w-[350px]">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search company or branch..." 
                    className="w-full pl-16 pr-8 py-5 bg-white border border-slate-200 rounded-[2rem] text-sm font-bold text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500/50 shadow-xl shadow-slate-100/50 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
               <button className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-cyan-600 text-white rounded-[2rem] text-xs font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                  <Download className="w-5 h-5" />
                  Download Report
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCompanies.map((company, index) => (
                <motion.div
                  key={`${selectedYear}-${company.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative scale-[0.96] hover:scale-100 transition-all duration-500"
                >
                  <div className="relative p-[3px] bg-gradient-to-br from-slate-200 to-slate-200 group-hover:from-cyan-400 group-hover:to-primary rounded-[3.2rem] shadow-xl transition-all duration-700">
                    <div className="relative h-full bg-white rounded-[3rem] p-8 flex flex-col group/card overflow-hidden">
                       <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-50/50 to-transparent pointer-events-none" />
                    
                     {/* Logo Area with Inner Border */}
                     <div className="mb-8 text-center relative mt-2">
                        <div className="w-24 h-24 mx-auto bg-white rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.06)] border-[6px] border-slate-50 flex items-center justify-center p-4 group-hover/card:scale-110 group-hover/card:-translate-y-2 transition-all duration-700">
                          <PlacementCompanyLogo src={company.logo} name={company.name} />
                       </div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-100/30 blur-3xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="text-center mb-8 flex-1">
                       <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tighter mb-4 italic group-hover/card:text-cyan-600 transition-colors">
                          {company.name}
                       </h3>
                       
                       <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                         {company.branches.split(',').slice(0, 4).map((branch, i) => (
                           <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[8px] font-black uppercase tracking-widest rounded-lg border border-slate-100 transition-colors group-hover/card:bg-cyan-50 group-hover/card:text-cyan-600 group-hover/card:border-cyan-100">
                             {branch.trim()}
                           </span>
                         ))}
                       </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="pt-8 border-t-2 border-slate-50">
                       <div className="grid grid-cols-2 gap-4">
                          <div className="text-left border-r border-slate-50">
                             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 leading-none">Selections</div>
                             <div className="text-2xl font-black text-navy-950 tracking-tighter tabular-nums flex items-center gap-2 leading-none">
                                {company.stats || '---'}
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                             </div>
                          </div>
                          <div className="text-right pl-4">
                             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 leading-none">Package</div>
                             <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-primary tracking-tighter tabular-nums leading-none">
                                {company.package ? `₹${company.package}L` : '---'}
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Floating Action Badge */}
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/card:bg-navy-950 group-hover/card:text-white group-hover/card:scale-110 transition-all duration-500 shadow-sm">
                       <ChevronRight className="w-5 h-5" />
                    </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredCompanies.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tighter mb-3">No Results Found</h3>
              <p className="text-slate-400 font-medium">Try adjusting your search or year filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer Stats CTA */}
      <section className="bg-white border-y border-slate-100 py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 blur-3xl rounded-full" />
                <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" className="rounded-[3rem] shadow-2xl relative z-10" alt="" />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-100">
                   <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-black text-primary">120+</div>
                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Companies 2024</div>
                      </div>
                      <div className="w-px h-12 bg-slate-100" />
                      <div className="text-center">
                        <div className="text-4xl font-black text-secondary">₹12.5L</div>
                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">High Package</div>
                      </div>
                   </div>
                </div>
             </div>
             
             <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-6 block">Future Ready BECians</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-10 tracking-tighter uppercase">
                   Your Success starts <span className="text-primary italic">HERE.</span>
                </h2>
                <div className="space-y-8 mb-12">
                   {[
                     { title: "Personalized Training", desc: "Hard & Soft skill development from first year onwards.", icon: GraduationCap },
                     { title: "Live Internships", desc: "Real-world exposure with our 200+ industry partners.", icon: Award },
                     { title: "Dream Companies", desc: "Top-tier MNCs and core engineering giants recruit at BEC.", icon: Trophy }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary shrink-0 border border-slate-50">
                           <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <button className="w-full sm:w-fit px-12 py-6 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-navy-950 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                   Connect with Placement Cell <ChevronRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Training & Development Modules */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
           <div className="text-center mb-20">
              <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-6 block">Beyond Placements</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                 Career Preparation <span className="text-primary italic">Ecosystem.</span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto font-medium leading-relaxed uppercase text-[10px] tracking-widest">
                 We don't just find jobs; we build careers through a 4-year structured development program.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Soft Skills & Verbal", desc: "Intensive 200+ hours of communication, personality development, and leadership sessions conducted by industry experts.", icon: Sparkles },
                { title: "Niche Tech Training", desc: "Certification programs in AI/ML, Cloud Computing, and Drone Technology to keep you ahead of the digital curve.", icon: Zap },
                { title: "Industry Readiness", desc: "Weekly mock interviews, aptitude bootcamps, and group discussion drills to tackle high-pressure recruitment rounds.", icon: Target }
              ].map((m, i) => (
                <div key={i} className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary transition-all duration-500">
                   <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                      <m.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{m.title}</h3>
                   <p className="text-white/50 text-sm font-medium leading-relaxed mb-8">{m.desc}</p>
                   <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-700 rounded-full" />
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
