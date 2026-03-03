import { motion } from 'framer-motion';
import { RadioReceiver, Waves, MoveRight, Network, Server } from 'lucide-react';

export default function Slide7() {
    const technologies = [
        {
            icon: RadioReceiver,
            title: "Massive MIMO",
            desc: "Multiple antennas at base stations exponentially increase capacity and simultaneous connections.",
            color: "text-theme-cyan"
        },
        {
            icon: MoveRight,
            title: "Beamforming",
            desc: "Directs targeted signals toward specific users rather than broadcasting in all directions.",
            color: "text-theme-blue"
        },
        {
            icon: Waves,
            title: "Millimeter Waves",
            desc: "Utilizes higher frequency bands (mmWave) to enable vastly faster data transmission speeds.",
            color: "text-theme-purple"
        },
        {
            icon: Network,
            title: "Network Slicing",
            desc: "Creates multiple independent virtual networks on a single physical infrastructure.",
            color: "text-theme-blue"
        },
        {
            icon: Server,
            title: "Edge Computing",
            desc: "Processes data closer to the source, ensuring faster processing and lower latency.",
            color: "text-theme-cyan"
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-12 relative overflow-hidden">

            {/* Left Column: Title and Illustration */}
            <div className="flex-1 pr-12 z-10 flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="text-theme-purple uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Core Innovations</span>
                    <h2 className="text-5xl font-black text-white leading-tight">
                        5G Key <br />
                        <span className="text-gradient">Technologies</span>
                    </h2>
                </motion.div>

                {/* Custom Beamforming Illustration */}
                <motion.div
                    className="relative w-full h-64 mt-4 glass-panel rounded-2xl border-dark-700 overflow-hidden flex items-center justify-center bg-dark-800/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <svg viewBox="0 0 300 200" className="w-full h-full opacity-80 pl-4">
                        <defs>
                            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Antenna Tower */}
                        <rect x="30" y="80" width="10" height="120" fill="#cbd5e1" />
                        <path d="M20,80 L50,80 L40,40 Z" fill="#94a3b8" />
                        <circle cx="35" cy="40" r="4" fill="#ef4444" className="animate-pulse" />

                        {/* Omnidirectional Waves (Faded out) */}
                        <path d="M45,40 Q90,0 120,40" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                        <path d="M45,40 Q80,100 120,80" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />

                        {/* Targeted Beamforming Waves */}
                        <path d="M40,40 L260,110 L260,150 Z" fill="url(#beamGrad)" className="animate-pulse opacity-60" />

                        {/* User Devices */}
                        <circle cx="250" cy="130" r="6" fill="#0891b2" />
                        <circle cx="210" cy="50" r="4" fill="#94a3b8" />
                        <circle cx="200" cy="180" r="4" fill="#94a3b8" />
                    </svg>
                    <div className="absolute top-4 left-4 text-[10px] font-bold text-theme-blue bg-theme-blue/10 px-2 py-1 rounded">BEAMFORMING SIMULATION</div>
                </motion.div>
            </div>

            {/* Right Column: Technology Nodes */}
            <div className="flex-1 border-l border-dark-700 pl-8 py-8 relative z-10">
                <div className="space-y-6">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="p-3 rounded-full bg-dark-800 border border-dark-700 shadow-sm group-hover:scale-110 group-hover:border-theme-blue/30 transition-all duration-300 relative z-10 shrink-0">
                                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                            </div>
                            <div className="pt-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-theme-blue transition-colors mb-1">{tech.title}</h3>
                                <p className="text-sm font-medium text-dark-300 leading-relaxed">{tech.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Vertical connection line for nodes */}
                <div className="absolute left-[2.45rem] top-12 bottom-12 w-[1px] bg-dark-700 z-0"></div>
            </div>

        </div>
    );
}
