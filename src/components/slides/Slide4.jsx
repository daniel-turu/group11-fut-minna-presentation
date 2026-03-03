import { motion } from 'framer-motion';
import { Activity, Phone, MonitorPlay, Gamepad2, Rocket } from 'lucide-react';

export default function Slide4() {
    const generations = [
        {
            gen: "1G",
            year: "1980s",
            speed: "2 kbps",
            features: "Analog voice, poor quality",
            icon: Phone,
            color: "from-dark-700 to-dark-900",
            iconColor: "text-dark-400",
            delay: 0.1
        },
        {
            gen: "2G",
            year: "1990s",
            speed: "64 kbps",
            features: "Digital voice, SMS, security",
            icon: Activity,
            color: "from-dark-400 to-dark-800",
            iconColor: "text-dark-400",
            delay: 0.3
        },
        {
            gen: "3G",
            year: "2000s",
            speed: "2 Mbps",
            features: "Internet, video calls",
            icon: MonitorPlay,
            color: "from-theme-purple/30 to-theme-purple/5",
            iconColor: "text-theme-purple",
            delay: 0.5
        },
        {
            gen: "4G",
            year: "2010s",
            speed: "1 Gbps",
            features: "High-speed, streaming, gaming",
            icon: Gamepad2,
            color: "from-theme-blue/30 to-theme-blue/5",
            iconColor: "text-theme-blue",
            delay: 0.7
        },
        {
            gen: "5G",
            year: "2020s",
            speed: "10 Gbps",
            features: "Ultra-fast, massive connectivity",
            icon: Rocket,
            color: "from-theme-cyan/40 to-theme-cyan/10",
            iconColor: "text-theme-cyan",
            delay: 0.9,
            active: true
        }
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12 relative py-8">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 z-10 w-full"
            >
                <span className="text-theme-cyan uppercase tracking-[0.3em] text-xs font-bold mb-2 block">Evolution Timeline</span>
                <h2 className="text-5xl font-bold text-white">
                    From <span className="text-3xl text-dark-400">1G</span> to <span className="text-gradient font-black">5G</span>
                </h2>
            </motion.div>

            <div className="w-full max-w-6xl relative z-10 flex justify-between items-end h-[350px] pb-12 mt-4">
                {/* Connecting Line */}
                <div className="absolute bottom-[4.5rem] left-8 right-8 h-[2px] bg-dark-700 rounded-full z-0 overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-transparent via-theme-blue to-theme-cyan shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                    />
                </div>

                {generations.map((item, index) => (
                    <motion.div
                        key={item.gen}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                        className="relative flex flex-col items-center w-52 group cursor-default"
                    >
                        {/* Speed indicator graph bar */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: `${20 + (index * 35)}px`, opacity: 1 }}
                            transition={{ duration: 0.8, delay: item.delay + 0.4 }}
                            className={`w-2 mb-8 rounded-t-full bg-gradient-to-t ${item.color} ${item.active ? 'shadow-[0_0_20px_rgba(34,211,238,0.5)]' : ''}`}
                        />

                        {/* Info Card */}
                        <div className={`glass-panel p-5 rounded-2xl border w-full text-center transition-all duration-300 relative z-10 bg-dark-800/80 mb-2
              ${item.active ? 'border-theme-cyan/50 shadow-[0_10px_30px_rgba(34,211,238,0.15)] -translate-y-4' : 'border-dark-700 group-hover:border-theme-cyan/30 group-hover:-translate-y-2'}`}
                        >
                            <div className="text-xs font-mono font-bold text-dark-400 mb-2">{item.year}</div>
                            <div className={`text-3xl font-black mb-3 flex items-center justify-center gap-2 ${item.active ? 'text-theme-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'text-white'}`}>
                                {item.gen}
                            </div>
                            <p className="text-xs text-dark-300 font-medium leading-relaxed mb-4 min-h-[40px] px-1">
                                {item.features}
                            </p>

                            <div className="mt-auto flex items-center justify-center gap-2 pt-3 border-t border-dark-700">
                                <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                                <span className={`text-sm font-bold tracking-wide ${item.active ? 'text-theme-cyan' : 'text-dark-300'}`}>
                                    {item.speed}
                                </span>
                            </div>
                        </div>

                        {/* Timeline Node */}
                        <div className={`absolute bottom-[4.1rem] w-5 h-5 rounded-full border-[5px] border-dark-900 z-20 transition-all duration-300
              ${item.active ? 'bg-theme-cyan shadow-[0_0_20px_rgba(34,211,238,0.8)] scale-125' : 'bg-dark-400 group-hover:bg-theme-cyan/80 group-hover:scale-110'}`}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
