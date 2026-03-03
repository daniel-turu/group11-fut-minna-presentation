import { motion } from 'framer-motion';
import { User, Shield, Zap, Cpu, Activity } from 'lucide-react';

const members = [
    { id: 1, name: 'Anthony Joseph', role: '2021/1/82982CT', icon: Shield, color: 'text-theme-cyan', delay: 0.1 },
    { id: 2, name: 'David Oluwafemi Adisa', role: '2022/2/84703CT', icon: Cpu, color: 'text-theme-blue', delay: 0.2 },
    { id: 3, name: 'Daniel Turu Joseph', role: '2022/2/84704CT', icon: Activity, color: 'text-theme-purple', delay: 0.3 },
    { id: 4, name: 'Victoria Sekinetu Yusuf', role: '2022/2/84705CT', icon: Zap, color: 'text-theme-cyan', delay: 0.4 },
    { id: 5, name: 'Muhammed-khashif Olabisi Olajide', role: '2022/2/84706CT', icon: User, color: 'text-theme-blue', delay: 0.5 },
];

export default function Slide2() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12 relative">

            {/* Background abstract nodes */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 600">
                <path d="M100,100 L400,300 L700,100 L400,500 Z" stroke="url(#bgGrad)" strokeWidth="1" fill="none" />
                <path d="M250,200 L550,200 L400,400 Z" stroke="url(#bgGrad)" strokeWidth="0.5" strokeDasharray="5 5" fill="none" />
                <circle cx="100" cy="100" r="4" fill="#0891b2" />
                <circle cx="700" cy="100" r="4" fill="#7e22ce" />
                <circle cx="400" cy="500" r="4" fill="#2563eb" />
                <defs>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0891b2" />
                        <stop offset="50%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                </defs>
            </svg>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 z-10"
            >
                <span className="text-theme-cyan uppercase tracking-[0.3em] text-sm font-bold mb-3 block">The Team</span>
                <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-dark-300">
                    Group <span className="text-gradient">11</span> Members
                </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl z-10">
                {members.map((member) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: member.delay, ease: "easeOut" }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass-panel rounded-2xl p-6 w-80 flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] relative overflow-hidden"
                    >
                        {/* Top gradient highlight effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dark-700 to-transparent group-hover:via-theme-blue/30 transition-all duration-500"></div>

                        <div className="w-20 h-20 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center mb-5 group-hover:border-theme-blue/30 transition-all duration-300 shadow-sm">
                            <member.icon className={`w-10 h-10 ${member.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm`} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide leading-tight px-2">{member.name}</h3>
                        <p className="text-dark-300 text-base font-semibold">{member.role}</p>

                        {/* Tech decorative line */}
                        <div className="mt-4 w-12 h-[2px] bg-dark-700 group-hover:bg-theme-cyan/50 transition-colors duration-300"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
