import { Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const socials = [
  { 
    name: 'Facebook', 
    icon: Facebook, 
    href: 'https://facebook.com/becbbsr', 
    color: 'bg-[#3b5998]' 
  },
  { 
    name: 'X', 
    icon: Twitter, 
    href: 'https://twitter.com/becbbsr', 
    color: 'bg-[#1DA1F2]' 
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/school/bhubaneswar-engineering-college-bec-bhubaneswar-kh/', 
    color: 'bg-[#0077b5]' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://www.instagram.com/becbbsr?igsh=MW1jbDJxZ3QxYzdxZQ==', 
    color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' 
  },
  { 
    name: 'Whatsapp', 
    icon: MessageCircle, 
    href: 'https://wa.me/919437088215', 
    color: 'bg-[#25D366]',
    isWhatsapp: true
  },
  { 
    name: 'Youtube', 
    icon: Youtube, 
    href: 'https://youtube.com/@becbbsr', 
    color: 'bg-[#FF0000]' 
  }
];

export const FloatingSocials = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-0.5">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(social.name)}
          onMouseLeave={() => setHovered(null)}
          className={`relative flex items-center ${social.color} text-white p-4 rounded-r-2xl transition-all duration-500 hover:pl-8 group shadow-xl`}
          whileHover={{ x: 10 }}
          initial={false}
        >
          <social.icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-6" />
          
          <AnimatePresence mode="wait">
            {hovered === social.name && (
              <motion.span
                initial={{ opacity: 0, width: 0, x: -10 }}
                animate={{ opacity: 1, width: 'auto', x: 0 }}
                exit={{ opacity: 0, width: 0, x: -10 }}
                className="ml-4 font-black text-[10px] uppercase tracking-widest whitespace-nowrap overflow-hidden font-poppins"
              >
                {social.name}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
    </div>
  );
};
