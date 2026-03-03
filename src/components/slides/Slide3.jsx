import { motion } from 'framer-motion';
import { Wifi, Radio, Smartphone, Satellite, Globe2, Zap } from 'lucide-react';

export default function Slide3() {
    const points = [
        {
            icon: Radio,
            title: "No Physical Cables",
            desc: "Communication relies on wireless transmission mediums rather than physical connections.",
            delay: 0.2
        },
        {
            icon: Zap,
            title: "Electromagnetic Waves",
            desc: "Utilizes radio frequency (RF) signals to carry information through the air.",
            delay: 0.3
        },
        {
            icon: Globe2,
            title: "Global Connectivity",
            desc: "Enables ubiquitous mobile communication and borderless internet access.",
            delay: 0.4
        },
        {
            icon: Smartphone,
            title: "Digital Foundation",
            desc: "Serves as the indispensable backbone of our modern digital society.",
            delay: 0.5
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-12 relative">
            <div className="flex-1 pr-12 z-10 flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-theme-cyan/10 text-theme-cyan border border-theme-cyan/20">
                            <Wifi className="w-6 h-6" />
                        </div>
                        <span className="text-theme-cyan uppercase tracking-[0.2em] text-sm font-bold">Core Concepts</span>
                    </div>
                    <h2 className="text-5xl font-bold leading-tight mb-4 text-white">
                        Introduction to <br />
                        <span className="text-gradient">Wireless Networking</span>
                    </h2>
                    <p className="text-dark-200 text-lg max-w-xl leading-relaxed font-medium">
                        Wireless networking allows devices to transmit data through the air using radio waves,
                        forming the basis for modern connectivity, from smartphones to satellites.
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full h-48 rounded-2xl overflow-hidden glass-panel border-dark-700 relative group mb-6"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                    <img
                        src="/wireless-hero.png"
                        alt="Futuristic Wireless Network Concept"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-wrap gap-3"
                >
                    <div className="px-4 py-2 rounded-full glass-panel flex items-center gap-2 text-sm text-dark-100 font-medium border-dark-700 bg-dark-800/80">
                        <Smartphone className="w-4 h-4 text-theme-blue" /> Cellular
                    </div>
                    <div className="px-4 py-2 rounded-full glass-panel flex items-center gap-2 text-sm text-dark-100 font-medium border-dark-700 bg-dark-800/80">
                        <Wifi className="w-4 h-4 text-theme-cyan" /> Wi-Fi
                    </div>
                    <div className="px-4 py-2 rounded-full glass-panel flex items-center gap-2 text-sm text-dark-100 font-medium border-dark-700 bg-dark-800/80">
                        <Radio className="w-4 h-4 text-theme-purple" /> Bluetooth
                    </div>
                    <div className="px-4 py-2 rounded-full glass-panel flex items-center gap-2 text-sm text-dark-100 font-medium border-dark-700 bg-dark-800/80">
                        <Satellite className="w-4 h-4 text-theme-blue" /> Satellite
                    </div>
                </motion.div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-4 z-10">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: point.delay, ease: "easeOut" }}
                        className="glass-panel p-5 rounded-xl border border-dark-700 hover:border-theme-cyan/40 transition-all duration-300 flex items-start gap-4 group"
                    >
                        <div className="p-3 rounded-lg bg-dark-800 border border-dark-700 group-hover:border-theme-cyan/40 transition-colors shadow-sm">
                            <point.icon className="w-6 h-6 text-dark-400 group-hover:text-theme-cyan transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">{point.title}</h3>
                            <p className="text-dark-300 text-sm leading-relaxed font-medium">{point.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 border border-dark-100/5 rounded-full pointer-events-none" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 border border-dark-100/5 rounded-full pointer-events-none" />
            <div className="absolute right-24 top-1/2 -translate-y-1/2 w-48 h-48 border border-dark-100/10 rounded-full pointer-events-none border-dashed animate-[spin_60s_linear_infinite]" />
        </div>
    );
}
