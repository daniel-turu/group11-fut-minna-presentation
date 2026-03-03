import { motion } from 'framer-motion';
import { Wifi, BrainCircuit, Network, Zap } from 'lucide-react';

export default function Slide16() {
    const points = [
        {
            icon: Wifi,
            text: "5G transforms society with massive speeds, ultra-low latency, and reliable connectivity.",
            color: "text-theme-cyan"
        },
        {
            icon: BrainCircuit,
            text: "6G will introduce natively intelligent communication driven by artificial intelligence.",
            color: "text-theme-purple"
        },
        {
            icon: Network,
            text: "Future networks will connect everything—from microscopic sensors to entire cities.",
            color: "text-theme-blue"
        },
        {
            icon: Zap,
            text: "Wireless networking is the critical backbone for all future human and technological development.",
            color: "text-emerald-500"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-16 relative">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl"
            >
                <div className="text-center mb-10">
                    <span className="text-dark-400 uppercase tracking-[0.3em] text-sm font-bold mb-2 block">Summary</span>
                    <h2 className="text-5xl font-black text-white">
                        <span className="text-gradient">Conclusion</span>
                    </h2>
                </div>

                <div className="glass-panel p-8 rounded-3xl border border-dark-700 bg-dark-800/50 relative overflow-hidden shadow-xl">
                    {/* Subtle animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-theme-cyan/5 via-theme-blue/5 to-theme-purple/5 opacity-50"></div>

                    <div className="relative z-10 space-y-6">
                        {points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.15) }}
                                className="flex items-start gap-5 hover:bg-dark-800/40 p-4 rounded-xl transition-colors cursor-default"
                            >
                                <div className={`p-3 rounded-xl bg-dark-800 border border-dark-700 shadow-sm shrink-0`}>
                                    <point.icon className={`w-6 h-6 ${point.color}`} />
                                </div>
                                <p className="text-dark-200 font-medium text-lg leading-relaxed pt-1">
                                    {point.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
