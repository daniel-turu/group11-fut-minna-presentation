import { motion } from 'framer-motion';
import { Smartphone, RadioTower, Database, Cpu } from 'lucide-react';

export default function Slide6() {
    const components = [
        {
            icon: Smartphone,
            title: "User Equipment (UE)",
            desc: "Phones, sensors, laptops, and smart devices that connect to the network.",
            color: "text-theme-cyan",
            delay: 0.2
        },
        {
            icon: RadioTower,
            title: "Radio Access Network (RAN)",
            desc: "Base stations and antennas providing the wireless link to user devices.",
            color: "text-theme-blue",
            delay: 0.4
        },
        {
            icon: Database,
            title: "Core Network",
            desc: "The central nervous system managing data routing, authentication, and control.",
            color: "text-theme-purple",
            delay: 0.6
        },
        {
            icon: Cpu,
            title: "Edge Computing",
            desc: "Local processing near users to reduce delay and improve real-time performance.",
            color: "text-theme-cyan",
            delay: 0.8
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-16 relative">

            {/* Left Column: Text & Features */}
            <div className="flex-[1] pr-12 z-10 flex flex-col justify-center h-full">

                <div className="mb-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-theme-blue uppercase tracking-[0.3em] text-base font-bold mb-3 block">System Design</span>
                        <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
                            5G <span className="text-gradient">Architecture</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-3 z-10 w-full max-w-xl">
                    {components.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                            className="glass-panel p-4 rounded-2xl border border-dark-700 hover:border-theme-blue/30 transition-all duration-300 group hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] bg-dark-800/60"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-xl bg-dark-900 border border-dark-700 group-hover:border-theme-blue/20 transition-colors shadow-sm shrink-0`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-dark-300 text-sm font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Column: Generated Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="flex-[1.2] h-[600px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(37,99,235,0.15)] bg-dark-900"
            >
                {/* Soft gradient overlays for blending */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-900/30 z-10 pointer-events-none"></div>

                <img
                    src="/5g-architecture.png"
                    alt="5G Network Architecture Flow"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out object-left"
                />
            </motion.div>

        </div>
    );
}
