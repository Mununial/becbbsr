import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  field?: string;
}

export const AdmissionBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: "Hello! Welcome to Bhubaneswar Engineering College (BEC). 👋" },
    { id: '2', type: 'bot', text: "I'm your Admission Assistant. May I know your full name first?", field: 'name' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [step, setStep] = useState(0); // 0: Name, 1: Email, 2: Phone, 3: Course, 4: Final
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    
    const currentInput = inputValue.trim();
    setInputValue('');

    // Logic for next bot question
    setTimeout(() => {
      if (step === 0) {
        setUserData(prev => ({ ...prev, name: currentInput }));
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: `Nice to meet you, ${currentInput}! 😊 I'm here to help you with BEC admissions. Could you please provide your email address so we can send you the brochure and details?`,
          field: 'email'
        }]);
        setStep(1);
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, email: currentInput }));
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: `Thank you! And your contact number? Our admission counselors will use this to reach out to you.`,
          field: 'phone'
        }]);
        setStep(2);
      } else if (step === 2) {
        setUserData(prev => ({ ...prev, phone: currentInput }));
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: `Great. Which course are you interested in? (B.Tech, MBA, Diploma, etc)`,
          field: 'course'
        }]);
        setStep(3);
      } else if (step === 3) {
        setUserData(prev => ({ ...prev, course: currentInput }));
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: `Excellent choice! 🎓 I've registered your interest in ${currentInput}. Our admission team will contact you shortly on ${userData.phone} or via email at ${userData.email}.`,
        }, {
           id: (Date.now() + 2).toString(), 
           type: 'bot', 
           text: `Is there anything else you'd like to ask? You can also visit our campus for a tour!`,
        }]);
        setStep(4);
        
        // Final data collection - in a real app, send this to backend
        console.log("Admission Data Collected:", { ...userData, course: currentInput });
        // You could call an API here
      } else {
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: "I've noted that. Our counselor will address all your queries when they call. Is there anything else?",
        }]);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-inter">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex items-center justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                     <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight uppercase tracking-wider">Admission Help</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                       <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                       <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Counselor Online</span>
                    </div>
                  </div>
               </div>
               <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm
                      ${msg.type === 'user' ? 'bg-secondary' : 'bg-primary'}`}>
                      {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm shadow-sm leading-relaxed
                      ${msg.type === 'user' 
                        ? 'bg-secondary text-white rounded-tr-none' 
                        : 'bg-white text-navy-900 border border-slate-100 rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
               <div className="flex gap-2 bg-slate-100 p-2 rounded-2xl">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your reply..."
                    className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none text-navy-900"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                  </button>
               </div>
               <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">Bhubaneswar Engineering College Admission Portal</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-secondary text-white text-[10px] font-bold rounded-full border-4 border-white flex items-center justify-center">
            1
          </span>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-navy-900 text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest shadow-xl border border-white/10">
            Admissions Open! Chat Now
          </div>
        )}
      </motion.button>
    </div>
  );
};
