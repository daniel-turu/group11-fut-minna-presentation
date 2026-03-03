import { motion } from 'framer-motion';
import { Orbit, Fingerprint, Command, Waves } from 'lucide-react';

export default function Slide13() {
    const futureTech = [
        {
            title: "Space-based Internet",
            icon: Orbit,
            desc: "Low Earth Orbit (LEO) satellite constellations like Starlink providing ubiquitous global coverage.",
            delay: 0.2
        },
        {
            title: "Quantum Communication",
            icon: Fingerprint,
            desc: "Unhackable data transmission using the principles of quantum entanglement and superposition.",
            delay: 0.3
        },
        {
            title: "Fully Autonomous Systems",
            icon: Command,
            desc: "Self-governing networks capable of building, repairing, and defending themselves.",
            delay: 0.4
        },
        {
            title: "Global Wireless Connectivity",
            icon: Waves,
            desc: "Eradicating dead zones entirely, ensuring every corner of the planet is connected instantly.",
            delay: 0.5
        }
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center px-16 relative overflow-hidden bg-gradient-to-br from-dark-900 to-theme-blue/5">

            {/* Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <Orbit className="w-[600px] h-[600px] text-theme-blue" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center z-10"
            >
                <span className="text-theme-cyan uppercase tracking-[0.3em] text-xs font-bold mb-2 block">The Distant Horizon</span>
                <h2 className="text-5xl font-black text-white">
                    <span className="text-gradient">Beyond</span> 6G
                </h2>
            </motion.div>

            <div className="flex w-full max-w-5xl mx-auto gap-6 z-10">
                {futureTech.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: tech.delay, ease: "easeOut" }}
                        className="flex-1 glass-panel p-6 rounded-2xl border border-dark-700 hover:border-theme-blue/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(37,99,235,0.08)] bg-dark-800/50 text-center flex flex-col items-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-dark-900 border border-dark-700 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <tech.icon className="w-8 h-8 text-theme-blue opacity-80 group-hover:opacity-100" />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 h-12 flex items-center justify-center leading-tight">
                            {tech.title}
                        </h3>

                        <div className="w-8 h-[2px] bg-theme-cyan/30 mx-auto my-1 group-hover:bg-theme-cyan transition-colors"></div>

                        <p className="text-dark-300 font-medium text-sm leading-relaxed mt-3">
                            {tech.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
