import { motion } from 'framer-motion';
import { Network, Zap, Timer, Smartphone, Layers } from 'lucide-react';

export default function Slide5() {
    const features = [
        {
            icon: Zap,
            title: "10 Gbps Data Speeds",
            desc: "Extremely high data transfer rates, enabling flawless 8K streaming and rapid downloads.",
            color: "text-theme-cyan",
            delay: 0.2
        },
        {
            icon: Timer,
            title: "1ms Ultra-low Latency",
            desc: "Near-instantaneous response times, critical for autonomous driving and remote surgery.",
            color: "text-theme-blue",
            delay: 0.3
        },
        {
            icon: Network,
            title: "Massive Connectivity",
            desc: "Supports millions of devices per square kilometer without network degradation.",
            color: "text-theme-purple",
            delay: 0.4
        },
        {
            icon: Layers,
            title: "Smart Systems Enabler",
            desc: "Powers the foundation of smart cities, automated factories, and advanced IoT ecosystems.",
            color: "text-theme-cyan",
            delay: 0.5
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-16 relative">

            {/* Left Column: Text & Features */}
            <div className="flex-[1.2] pr-12 z-10 flex flex-col justify-center h-full">

                <div className="mb-10 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="p-3 rounded-xl bg-theme-blue/10 border border-theme-blue/20">
                            <Smartphone className="w-8 h-8 text-theme-blue" />
                        </div>
                        <div>
                            <span className="text-theme-blue uppercase tracking-[0.2em] text-sm font-bold block mb-1">5th Generation</span>
                            <h2 className="text-5xl font-black text-white tracking-tight">
                                What is <span className="text-gradient">5G?</span>
                            </h2>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-dark-200 text-lg max-w-xl font-medium leading-relaxed mt-6 pl-3 border-l-4 border-theme-blue"
                    >
                        5G is the fifth generation mobile network. It is a new global wireless standard designed to connect virtually everyone and everything together including machines, objects, and devices.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 gap-4 z-10 w-full max-w-3xl">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: feature.delay, ease: "easeOut" }}
                            className="glass-panel p-5 rounded-2xl border border-dark-700 hover:border-theme-blue/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] bg-dark-800/50"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl bg-dark-800 border border-dark-700 group-hover:border-theme-blue/20 transition-colors shadow-sm`}>
                                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[15px] font-bold text-white mb-1 leading-tight">{feature.title}</h3>
                                    <p className="text-dark-300 text-xs font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Column: Generated Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="flex-[0.8] h-[550px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
            >
                {/* Soft gradient overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-dark-900/10 to-dark-900/60 z-10 pointer-events-none"></div>

                <img
                    src="/5g-hero.png"
                    alt="5G Network Core Concept"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
            </motion.div>

            {/* Abstract background graphics */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 transform translate-x-1/4 translate-y-1/4">
                <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="250" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="10 20" className="animate-[spin_40s_linear_infinite]" />
                    <circle cx="300" cy="300" r="180" fill="none" stroke="#0891b2" strokeWidth="1" strokeDasharray="5 15" className="animate-[spin_30s_linear_infinite_reverse]" />
                </svg>
            </div>

        </div>
    );
}
