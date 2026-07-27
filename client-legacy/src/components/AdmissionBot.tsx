import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Volume2, VolumeX, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
import { useData } from '../context/DataContext';

interface Message {
  id: string;
  type: 'bot' | 'user' | 'facilities';
  text: string;
  buttons?: { label: string; value: string }[];
}

const translations = {
  en: {
    welcome: "Welcome to Bhubaneswar Engineering College (BEC) 🎓\nAdmissions Open 2026",
    askName: "What is your full name?",
    hello: (name: string) => `Hello ${name} 👋\nPlease choose your preferred language:`,
    askCourse: "Which course are you interested in?",
    facilitiesIntro: "Bhubaneswar Engineering College (BEC) is one of the premier institutions in Odisha. Here are our outstanding facilities:",
    facilitiesList: [
      { name: "🛡️ 100% Placement Support", desc: "Comprehensive training and recruiters like Wipro, Infosys, Tech Mahindra." },
      { name: "🔬 Modern Labs & Hangars", desc: "State-of-the-art aeronautical hangar, workshops, and high-tech equipment." },
      { name: "🤖 AI & Drone Lab", desc: "Dedicated research center for Artificial Intelligence and unmanned aerial vehicles (UAVs)." },
      { name: "💼 Internship Opportunities", desc: "Premium hands-on internships at TATA, CTTC, and industry leaders." },
      { name: "🏫 Smart Classrooms", desc: "Fully air-conditioned interactive learning environments with modern smart boards." }
    ],
    askContact: "To reserve your free counseling slot, could you please enter your 10-digit Mobile / WhatsApp number?",
    askEmail: "Thank you! Finally, please provide your Email address to receive our curriculum and scholarship brochures:",
    validating: "Validating...",
    invalidPhone: "⚠️ Please enter a valid 10-digit mobile number.",
    invalidEmail: "⚠️ Please enter a valid email address.",
    thankYou: (name: string) => `Thank you ${name} ❤️\nOur admissions cell has logged your file. A counselor will reach out to you shortly!`,
    whatsAppBtn: "Chat on WhatsApp",
    submitBtn: "Proceed to Contact Collection",
    replyPlaceholder: "Type your reply...",
    soundOn: "Sound On",
    soundOff: "Sound Off"
  },
  hi: {
    welcome: "भुवनेश्वर इंजीनियरिंग कॉलेज (BEC) में आपका स्वागत है 🎓\nप्रवेश प्रारंभ 2026",
    askName: "आपका पूरा नाम क्या है?",
    hello: (name: string) => `नमस्ते ${name} 👋\nकृपया अपनी पसंदीदा भाषा चुनें:`,
    askCourse: "आप किस कोर्स में रुचि रखते हैं?",
    facilitiesIntro: "भुवनेश्वर इंजीनियरिंग कॉलेज (BEC) ओडिशा के प्रमुख संस्थानों में से एक है। हमारी उत्कृष्ट सुविधाएं:",
    facilitiesList: [
      { name: "🛡️ 100% प्लेसमेंट सहायता", desc: "विप्रो, इंफोसिस, टेक महिंद्रा जैसी शीर्ष वैश्विक बहुराष्ट्रीय कंपनियों में 100% प्लेसमेंट सहायता।" },
      { name: "🔬 आधुनिक प्रयोगशालाएं और हैंगर", desc: "अत्याधुनिक प्रयोगशालाएं, कार्यशालाएं और हमारा सिग्नेचर एयरोनॉटिकल हैंगर।" },
      { name: "🤖 एआई और ड्रोन लैब", desc: "कृत्रिम बुद्धिमत्ता, ड्रोन झुंड तकनीक और यूएवी में उन्नत अनुसंधान केंद्र।" },
      { name: "💼 इंटर्नशिप के अवसर", desc: "CTTC, TATA और औद्योगिक सहयोगियों के साथ औद्योगिक इंटर्नशिप।" },
      { name: "🏫 स्मार्ट क्लासरूम", desc: "डिजिटल डिस्प्ले के साथ पूरी तरह से वातानुकूलित इंटरैक्टिव स्मार्ट क्लासरूम।" }
    ],
    askContact: "मुफ़्त करियर काउंसलिंग स्लॉट बुक करने के लिए, कृपया अपना 10 अंकों का मोबाइल/व्हाट्सएप नंबर दर्ज करें?",
    askEmail: "धन्यवाद! अंत में, सिलेबस और छात्रवृत्ति विवरण के लिए अपना ईमेल पता प्रदान करें:",
    validating: "सत्यापन...",
    invalidPhone: "⚠️ कृपया एक वैध 10 अंकों का मोबाइल नंबर दर्ज करें।",
    invalidEmail: "⚠️ कृपया एक वैध ईमेल पता दर्ज करें।",
    thankYou: (name: string) => `धन्यवाद ${name} ❤️\nहमारे काउंसलर जल्द ही आपसे व्हाट्सएप पर संपर्क करेंगे!`,
    whatsAppBtn: "व्हाट्सएप पर चैट करें",
    submitBtn: "अगला चरण (संपर्क विवरण)",
    replyPlaceholder: "अपना संदेश लिखें...",
    soundOn: "ध्वनि चालू",
    soundOff: "ध्वनि बंद"
  },
  or: {
    welcome: "ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ୍ (BEC) କୁ ଆପଣଙ୍କୁ ସ୍ୱାଗତ 🎓\nନାମଲେଖା ଆରମ୍ଭ 2026",
    askName: "ଆପଣଙ୍କର ସମ୍ପୂର୍ଣ୍ଣ ନାମ କ’ଣ?",
    hello: (name: string) => `ନମସ୍କାର ${name} 👋\nଦୟาକରି ଆପଣଙ୍କର ପସନ୍ଦର ଭାଷା ବାଛନ୍ତୁ:`,
    askCourse: "ଆପଣ କେଉଁ କୋର୍ସ ପାଇଁ ଆଗ୍ରହୀ?",
    facilitiesIntro: "ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ୍ (BEC) ଓଡ଼ିଶାର ଏକ ପ୍ରମୁଖ ଶିକ୍ଷାନୁଷ୍ଠାନ। ଆମର ପ୍ରମୁଖ ସୁବିଧାଗୁଡ଼ିକ:",
    facilitiesList: [
      { name: "🛡️ 100% ପ୍ଲେସମେଣ୍ଟ ସହାୟତା", desc: "Wipro, Infosys, Tech Mahindra ଭଳି ଶୀର୍ଷ କମ୍ପାନୀ ସହିତ 100% ପ୍ଲେସମେଣ୍ଟ ସୁବିଧା।" },
      { name: "🔬 ଆଧୁନିକ ଲ୍ୟାବ୍ ଓ ହ୍ୟାଙ୍ଗର", desc: "ଅତ୍ୟାଧୁନିକ ପ୍ରୟୋଗଶାଳା, କର୍ମଶାଳା ଏବଂ ଆମର ସିଗ୍ନେଚର୍ ଏରୋନଟିକାଲ୍ ହ୍ୟାଙ୍ଗର।" },
      { name: "🤖 ଏଆଇ ଏବଂ ଡ୍ରୋନ୍ ଲ୍ୟାବ୍", desc: "କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା (AI), ଡ୍ରୋନ୍ ଟେକ୍ନୋଲୋଜି ଏବଂ UAV ଉପରେ ଗବେଷଣା କେନ୍ଦ୍ର।" },
      { name: "💼 ଇଣ୍ଟର୍ନସିପ୍ ସୁଯୋଗ", desc: "CTTC, TATA ଏବଂ ଆନ୍ତର୍ଜାତୀୟ ସ୍ତରରେ ଶିଳ୍ପ ଇଣ୍ଟର୍ନସିପ୍ ସୁଯୋଗ।" },
      { name: "🏫 ସ୍ମାର୍ଟ କ୍ଲାସରୁମ୍", desc: "ଡିଜିଟାଲ୍ ସ୍ମାର୍ଟ ବୋର୍ଡ ସହିତ ଏୟାର-କଣ୍ଡିସନର ଯୁକ୍ତ ଆଧୁନିକ ଶ୍ରେଣୀ ଗୃହ।" }
    ],
    askContact: "ଆପଣଙ୍କର କାଉନସେଲିଂ ସ୍ଲଟ୍ ସୁରକ୍ଷିତ କରିବାକୁ, ଦୟାକରି ଆପଣଙ୍କର 10-ଅଙ୍କ ବିଶିଷ୍ଟ ମୋବାଇଲ୍/ହ୍ୱାଟ୍ସଆପ୍ ନମ୍ବର ଦିଅନ୍ତୁ?",
    askEmail: "ଧନ୍ୟବାଦ! ଶେଷରେ, ସିଲାବସ୍ ଏବଂ ସ୍କଲାରସିପ୍ ବ୍ରୋସର ପଠାଇବା ପାଇଁ ଆପଣଙ୍କର ଇମେଲ୍ ଠିକଣା କ’ଣ?",
    validating: "ଯାଞ୍ଚ ଚାଲିଛି...",
    invalidPhone: "⚠️ ଦୟାକରି ଏକ ସଠିକ୍ 10-ଅଙ୍କ ବିଶିଷ୍ଟ ମୋବାଇଲ୍ ନମ୍ବର ପ୍ରଦାନ କରନ୍ତୁ।",
    invalidEmail: "⚠️ ଦୟାକରି ଏକ ସଠିକ୍ ଇମେଲ୍ ଠିକଣା ପ୍ରଦାନ କରନ୍ତୁ।",
    thankYou: (name: string) => `ଧନ୍ୟବାଦ ${name} ❤️\nଆମର ଆଡମିଶନ ଟିମ୍ ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ହ୍ୱାଟ୍ସଆପ୍ ରେ ଯୋଗାଯୋଗ କରିବେ!`,
    whatsAppBtn: "ହ୍ୱାଟ୍ସଆପ୍ ରେ ଚାଟ୍ କରନ୍ତୁ",
    submitBtn: "ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ (ସମ୍ପର୍କ ବିବରଣୀ)",
    replyPlaceholder: "ଲେଖନ୍ତୁ...",
    soundOn: "ଶବ୍ଦ ଚାଲୁ",
    soundOff: "ଶବ୍ଦ ବନ୍ଦ"
  }
};

export const AdmissionBot = () => {
  const { inquiries, updateInquiries } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [lang, setLang] = useState<'en' | 'hi' | 'or'>('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0); // 0: Name, 1: Lang, 2: Course, 3: Facilities, 4: Phone, 5: Email, 6: Success
  const [userData, setUserData] = useState({
    name: '',
    language: 'English',
    course: '',
    phone: '',
    email: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Responsive dynamic drag constraints to prevent button from going off-screen
  const [dragConstraints, setDragConstraints] = useState({ left: -400, right: 0, top: -600, bottom: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      setDragConstraints({
        left: -window.innerWidth + 80,
        right: 0,
        top: -window.innerHeight + 80,
        bottom: 0
      });
    };
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // Sound generator using Web Audio API
  const playNotificationSound = (type: 'receive' | 'send' | 'success') => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'send') {
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'receive') {
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch (e) {
      console.error("Audio failed", e);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Welcome trigger when chat starts
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'welcome', type: 'bot', text: translations.en.welcome },
        { id: 'ask-name', type: 'bot', text: translations.en.askName }
      ]);
      setStep(0);
      playNotificationSound('receive');
    }
  }, [isOpen]);

  const handleSend = async (directVal?: string) => {
    const rawVal = directVal || inputValue;
    if (!rawVal.trim()) return;

    setErrorMsg('');
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: rawVal };
    setMessages(prev => [...prev, userMsg]);
    playNotificationSound('send');
    if (!directVal) setInputValue('');

    const textVal = rawVal.trim();

    // AI thinking typing delay
    setTimeout(async () => {
      // Step 0: Name entered -> Go to Language Selection
      if (step === 0) {
        setUserData(prev => ({ ...prev, name: textVal }));
        setMessages(prev => [
          ...prev,
          { 
            id: 'ask-lang', 
            type: 'bot', 
            text: translations.en.hello(textVal),
            buttons: [
              { label: "English", value: "en" },
              { label: "हिन्दी", value: "hi" },
              { label: "ଓଡ଼ିଆ", value: "or" }
            ]
          }
        ]);
        playNotificationSound('receive');
        setStep(1);
      }
      
      // Step 1: Language selection handled via button click. 
      // Step 2: Course Selection handled via button click.
      
      // Step 4: Mobile Number entered -> Validate and prompt Email
      else if (step === 4) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(textVal)) {
          setErrorMsg(translations[lang].invalidPhone);
          setMessages(prev => [...prev, { id: 'err-phone', type: 'bot', text: translations[lang].invalidPhone }]);
          playNotificationSound('receive');
          return;
        }
        setUserData(prev => ({ ...prev, phone: textVal }));
        setMessages(prev => [...prev, { id: 'ask-email', type: 'bot', text: translations[lang].askEmail }]);
        playNotificationSound('receive');
        setStep(5);
      }

      // Step 5: Email entered -> Validate, save, confirm
      else if (step === 5) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(textVal)) {
          setErrorMsg(translations[lang].invalidEmail);
          setMessages(prev => [...prev, { id: 'err-email', type: 'bot', text: translations[lang].invalidEmail }]);
          playNotificationSound('receive');
          return;
        }

        const finalUserData = { ...userData, email: textVal };
        setUserData(finalUserData);
        setStep(6);
        playNotificationSound('success');

        // Save data to Firebase and Express API concurrently in real-time
        const newInquiry = {
          id: Date.now().toString(),
          name: finalUserData.name,
          language: finalUserData.language,
          course: finalUserData.course,
          phone: finalUserData.phone,
          email: finalUserData.email,
          timestamp: new Date().toISOString(),
          ip: "Client Portal"
        };
        updateInquiries([newInquiry, ...(inquiries || [])]);

        setMessages(prev => [
          ...prev, 
          { id: 'confirm', type: 'bot', text: translations[lang].thankYou(userData.name || finalUserData.name) }
        ]);
      }
    }, 1000);
  };

  const handleLanguageClick = (selectedLang: 'en' | 'hi' | 'or') => {
    setLang(selectedLang);
    const langLabel = selectedLang === 'en' ? 'English' : selectedLang === 'hi' ? 'Hindi (हिन्दी)' : 'Odia (ଓଡ଼ିଆ)';
    setUserData(prev => ({ ...prev, language: langLabel }));
    
    // Add custom user bubble
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: langLabel };
    setMessages(prev => [...prev, userMsg]);
    playNotificationSound('send');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: 'ask-course',
          type: 'bot',
          text: translations[selectedLang].askCourse,
          buttons: [
            { label: "B.Tech", value: "B.Tech" },
            { label: "Diploma", value: "Diploma" },
            { label: "MBA", value: "MBA" }
          ]
        }
      ]);
      playNotificationSound('receive');
      setStep(2);
    }, 800);
  };

  const handleCourseClick = (course: string) => {
    setUserData(prev => ({ ...prev, course }));
    
    // Add custom user bubble
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: course };
    setMessages(prev => [...prev, userMsg]);
    playNotificationSound('send');

    setTimeout(() => {
      // 1. Send Facility intro
      setMessages(prev => [
        ...prev,
        { id: 'facilities-intro', type: 'bot', text: translations[lang].facilitiesIntro }
      ]);
      playNotificationSound('receive');

      // 2. Render highly interactive facilities cards
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: 'facilities-list', type: 'facilities', text: '' }
        ]);
        playNotificationSound('receive');
        setStep(3);
      }, 500);
    }, 800);
  };

  const handleFacilitiesProceed = () => {
    // Proceed to contact collection
    setMessages(prev => [...prev, { id: 'ask-contact', type: 'bot', text: translations[lang].askContact }]);
    playNotificationSound('receive');
    setStep(4);
  };

  return (
    <div className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-[9999] max-w-[calc(100vw-32px)] sm:max-w-[410px] font-inter ${isDarkMode ? 'dark' : ''}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className={`mb-4 w-full h-[72vh] sm:h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border transition-all duration-300 backdrop-blur-md
              ${isDarkMode 
                ? 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-cyan-950/20' 
                : 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-300/40'}`}
          >
            {/* Header Area */}
            <div className={`p-5 flex items-center justify-between relative overflow-hidden transition-colors duration-300
              ${isDarkMode 
                ? 'bg-gradient-to-r from-slate-900 to-navy-950 border-b border-slate-800' 
                : 'bg-gradient-to-r from-primary to-blue-800 text-white'}`}>
              
              {/* Blur particle backdrops */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-3.5 relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner transition-colors duration-300
                  ${isDarkMode ? 'bg-slate-800/40 border border-slate-700/50' : 'bg-white/20'}`}>
                  <img 
                    src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" 
                    alt="BEC Logo" 
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping absolute" />
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full relative" />
                    <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${isDarkMode ? 'text-cyan-400' : 'text-amber-400'}`}>Admissions 2026</span>
                  </div>
                  <h3 className={`font-black text-sm uppercase tracking-wider leading-tight mt-1 ${isDarkMode ? 'text-slate-100' : 'text-white'}`}>
                    BEC Bot Assistant
                  </h3>
                </div>
              </div>

              {/* Utility Panel */}
              <div className="flex items-center gap-1.5 relative z-10">
                {/* Audio Switcher */}
                <button 
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-2 rounded-xl transition-all hover:scale-105 active:scale-95
                    ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-white/10 text-white'}`}
                  title={soundEnabled ? translations[lang].soundOff : translations[lang].soundOn}
                >
                  {soundEnabled ? <Volume2 className="w-4.5 h-4.5" /> : <VolumeX className="w-4.5 h-4.5" />}
                </button>
                {/* Theme Switcher */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-xl transition-all hover:scale-105 active:scale-95
                    ${isDarkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-white/10 text-white'}`}
                >
                  {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
                </button>
                {/* Exit Gate */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-xl transition-all hover:scale-105 active:scale-95
                    ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-white/10 text-white'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat History Area */}
            <div className={`flex-1 overflow-y-auto p-5 space-y-4 transition-colors duration-300
              ${isDarkMode ? 'bg-slate-900/40' : 'bg-slate-50/50'}`}>
              
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* User / Bot Avatar */}
                    {msg.type !== 'facilities' && (
                      <div className={`w-8.5 h-8.5 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300
                        ${msg.type === 'user' 
                          ? (isDarkMode ? 'bg-cyan-600 text-slate-100' : 'bg-primary text-white')
                          : (isDarkMode ? 'bg-slate-800 text-cyan-400 border border-slate-700' : 'bg-slate-950 text-white')}`}>
                        {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4.5 h-4.5" />}
                      </div>
                    )}

                    {/* Standard Text Bubbles */}
                    {msg.type !== 'facilities' && (
                      <div className="space-y-2">
                        <div className={`p-4 rounded-2xl text-sm shadow-sm leading-relaxed whitespace-pre-line
                          ${msg.type === 'user'
                            ? (isDarkMode 
                                ? 'bg-cyan-600/90 text-slate-100 rounded-tr-none' 
                                : 'bg-primary text-white rounded-tr-none')
                            : (isDarkMode 
                                ? 'bg-slate-950/80 text-slate-200 border border-slate-800 rounded-tl-none' 
                                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none')}`}>
                          {msg.text}
                        </div>

                        {/* Interactive Buttons Inline */}
                        {msg.buttons && (
                          <div className="flex flex-wrap gap-2.5 mt-1">
                            {msg.buttons.map((btn) => (
                              <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                key={btn.value}
                                onClick={() => {
                                  if (step === 1) handleLanguageClick(btn.value as any);
                                  else if (step === 2) handleCourseClick(btn.value);
                                }}
                                className={`px-4 py-2 text-xs font-bold rounded-xl shadow-sm border transition-all duration-300
                                  ${isDarkMode 
                                    ? 'bg-slate-950 border-slate-800 text-cyan-400 hover:bg-slate-800' 
                                    : 'bg-white border-slate-200 text-primary hover:bg-slate-50'}`}
                              >
                                {btn.label}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Highly Interactive Custom Showcase Bubble */}
                    {msg.type === 'facilities' && (
                      <div className={`p-4 rounded-3xl shadow-md border w-full space-y-3.5 transition-colors duration-300
                        ${isDarkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-slate-300' 
                          : 'bg-white border-slate-100 text-slate-700'}`}>
                        <div className="text-xs font-black uppercase tracking-wider text-center text-primary dark:text-cyan-400 border-b dark:border-slate-800 pb-2">
                          🏫 BEC Campus Highlights
                        </div>
                        <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                          {translations[lang].facilitiesList.map((fac, idx) => (
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              key={fac.name} 
                              className={`p-2.5 rounded-xl border transition-colors duration-300
                                ${isDarkMode 
                                  ? 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900' 
                                  : 'bg-slate-50 border-slate-100 hover:bg-slate-100/70'}`}
                            >
                              <h4 className={`text-xs font-bold leading-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                                {fac.name}
                              </h4>
                              <p className="text-[10.5px] text-slate-500 mt-1 leading-relaxed leading-normal">
                                {fac.desc}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                        {step === 3 && (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleFacilitiesProceed}
                            className={`w-full py-2.5 rounded-xl font-bold text-xs shadow-md transition-all duration-300
                              ${isDarkMode 
                                ? 'bg-cyan-600 text-slate-100 hover:bg-cyan-500 shadow-cyan-950/40' 
                                : 'bg-primary text-white hover:bg-blue-800 shadow-primary/20'}`}
                          >
                            {translations[lang].submitBtn}
                          </motion.button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Animated Success Checkmark Ring */}
              {step === 6 && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="flex flex-col items-center justify-center py-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 animate-pulse" />
                  <p className="text-xs font-black uppercase text-green-500 tracking-widest mt-2 animate-bounce">
                    Submission Confirmed
                  </p>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Message Panel */}
            <div className={`p-4 border-t transition-colors duration-300
              ${isDarkMode ? 'bg-slate-950/95 border-slate-800' : 'bg-white border-slate-100'}`}>
              
              <div className={`flex gap-2 p-2 rounded-2xl border transition-all duration-300
                ${isDarkMode 
                  ? 'bg-slate-900/60 border-slate-800 focus-within:border-cyan-500/50' 
                  : 'bg-slate-100/80 border-slate-100 focus-within:border-primary/20 focus-within:bg-white'}`}>
                
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={translations[lang].replyPlaceholder}
                  disabled={step === 1 || step === 2 || step === 3 || step === 6}
                  className={`flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none transition-colors duration-300
                    ${isDarkMode ? 'text-slate-100 placeholder-slate-500' : 'text-slate-800 placeholder-slate-400'}`}
                />
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || step === 1 || step === 2 || step === 3 || step === 6}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md
                    ${isDarkMode 
                      ? 'bg-cyan-600 text-slate-100 disabled:opacity-30 disabled:bg-slate-800 disabled:text-slate-600 shadow-cyan-950/40' 
                      : 'bg-primary text-white disabled:opacity-40 disabled:bg-slate-200 disabled:text-slate-400 shadow-primary/20'}`}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Footnote Branding & WhatsApp quick link */}
              <div className="flex items-center justify-between mt-3 px-1 text-[10px] text-slate-400 font-medium tracking-wide">
                <span>BEC Admission Portal 2026</span>
                <a 
                  href="https://wa.me/919437044215?text=Hello%20BEC%20Admissions,%20I%20am%20interested%20in%20taking%20admission!"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1 active:scale-95"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                  {translations[lang].whatsAppBtn}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Core Ring */}
      <motion.button
        drag
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        dragMomentum={false}
        animate={isOpen ? { x: 0, y: 0 } : undefined}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary dark:bg-cyan-600 text-white rounded-full shadow-2xl flex items-center justify-center relative group active:scale-95 transition-all duration-300 shadow-primary/20 dark:shadow-cyan-900/30 cursor-grab active:cursor-grabbing touch-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageSquare className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Entrance highlighted callout badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[9px] font-black rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-md animate-pulse">
            26
          </span>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-slate-950/90 text-white px-4 py-2.5 rounded-2xl text-[11px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest shadow-xl border border-white/10">
            🔥 Admissions Open! Chat Now
          </div>
        )}
      </motion.button>
    </div>
  );
};
