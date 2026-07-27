import { Phone, Mail, GraduationCap, Map, Trophy, FileCheck, CreditCard, MessageSquare, Headset } from 'lucide-react';

const utilityLinks = [
  { name: 'Admission Open - 2026', icon: GraduationCap, href: '#', color: 'bg-[#5B6327]' },
  { name: '360° Virtual Tour', icon: Map, href: '#', color: 'bg-[#5B6327]' },
  { name: 'Hackathon', icon: Trophy, href: '#', color: 'bg-[#C3841D]' },
  { name: 'NIRF', icon: FileCheck, href: '#', color: 'bg-[#C3841D]' },
  { name: 'Approvals', icon: FileCheck, href: '#', color: 'bg-[#C3841D]' },
  { name: 'Fee Payment', icon: CreditCard, href: '#', color: 'bg-[#C3841D]' },
  { name: 'Feedback', icon: MessageSquare, href: '#', color: 'bg-[#C3841D]' },
  { name: 'Helpdesk', icon: Headset, href: '#', color: 'bg-[#C3841D]' },
];

export const TopBar = () => {
  return (
    <div className="w-full bg-[#1A0033] border-b border-white/5 relative z-[200] overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between min-h-[44px] gap-6">
          
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6 shrink-0">
            <a 
              href="mailto:info@becbbsr.ac.in" 
              className="flex items-center gap-2 text-[10.5px] font-bold text-white transition-colors group"
            >
              <div className="w-5 h-5 rounded bg-transparent flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
              </div>
              <span className="hidden sm:inline">info@becbbsr.ac.in</span>
            </a>
            <a 
              href="tel:+919437090875" 
              className="flex items-center gap-2 text-[10.5px] font-bold text-white transition-colors group"
            >
              <div className="w-5 h-5 rounded bg-transparent flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
              </div>
              <span className="hidden sm:inline">94370 90875</span>
            </a>
          </div>

          {/* Right: Utility Buttons - Scrollable on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1.5 -mr-4 pr-4 lg:mr-0 lg:pr-0">
            {utilityLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md ${link.color} text-white shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:brightness-110 transition-all duration-300`}
              >
                <span className="text-[10px] font-black uppercase tracking-tighter whitespace-nowrap">{link.name}</span>
              </a>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
