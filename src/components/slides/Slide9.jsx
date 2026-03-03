import { motion } from 'framer-motion';
import { ShieldAlert, BatteryWarning, Banknote, SignalLow, RadioTower } from 'lucide-react';

export default function Slide9() {
    const challenges = [
        {
            icon: Banknote,
            title: "Expensive Infrastructure",
            desc: "Deploying thousands of new base stations and fiber optic cables requires massive capital investment.",
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        },
        {
            icon: SignalLow,
            title: "Limited Coverage Range",
            desc: "Millimeter waves (mmWave) cannot travel far and are easily blocked by walls, trees, and rain.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            icon: RadioTower,
            title: "Base Station Density",
            desc: "Requires significantly more towers and small cells than 4G to maintain consistent coverage.",
            color: "text-yellow-600",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20"
        },
        {
            icon: BatteryWarning,
            title: "High Power Consumption",
            desc: "Advanced antennas and continuous data processing demands significantly more electricity.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            icon: ShieldAlert,
            title: "Security Vulnerabilities",
            desc: "Millions of newly connected IoT devices massively increase the potential attack surface for hackers.",
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-16 relative">

            {/* Abstract background symbol */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <ShieldAlert className="w-[400px] h-[400px] text-white" />
            </div>

            <div className="flex-1 pr-12 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="text-orange-600 uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Implementation Hurdles</span>
                    <h2 className="text-5xl font-black text-white leading-tight">
                        5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">Challenges</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-dark-200 text-lg max-w-md leading-relaxed font-medium"
                >
                    While 5G technology offers unprecedented capabilities, its deployment faces significant physical, financial, and security barriers that must be overcome for global adoption.
                </motion.p>
            </div>

            <div className="flex-1 flex flex-col gap-4 z-10 w-full max-w-lg">
                {challenges.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                        className={`glass-panel p-4 rounded-xl border ${item.border} flex items-center gap-4 group hover:bg-dark-800/90 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md cursor-default`}
                    >
                        <div className={`p-3 rounded-lg ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-[15px] mb-1">{item.title}</h3>
                            <p className="text-dark-300 text-[13px] leading-tight font-medium max-w-[95%]">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
