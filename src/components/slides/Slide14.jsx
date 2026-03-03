import { motion } from 'framer-motion';
import { ShieldCheck, UserX, Network, BrainCircuit } from 'lucide-react';

export default function Slide14() {
    const points = [
        {
            title: "Data Protection",
            icon: ShieldCheck,
            desc: "Robust encryption protocols to protect user privacy across billions of connected devices.",
            color: "text-theme-blue",
            border: "hover:border-theme-blue/40"
        },
        {
            title: "Cyber Attack Prevention",
            icon: UserX,
            desc: "Proactive threat detection to mitigate DDoS attacks and protect critical infrastructure.",
            color: "text-red-500",
            border: "hover:border-red-500/40"
        },
        {
            title: "Network Security",
            icon: Network,
            desc: "Decentralized trust models and blockchain integration for secure network management.",
            color: "text-theme-cyan",
            border: "hover:border-theme-cyan/40"
        },
        {
            title: "Ethical AI Usage",
            icon: BrainCircuit,
            desc: "Ensuring autonomous AI processes remain transparent, unbiased, and under human oversight.",
            color: "text-theme-purple",
            border: "hover:border-theme-purple/40"
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-16 relative">

            <div className="flex-[0.8] pr-12 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="text-red-500 uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Critical Considerations</span>
                    <h2 className="text-5xl font-black text-white leading-tight">
                        Security & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-theme-purple">Ethics</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-dark-200 text-lg leading-relaxed font-medium mb-10 border-l-4 border-red-500/50 pl-4"
                >
                    As networks become exponentially faster and more ingrained into physical infrastructure, the consequences of security breaches and unethical AI become severe.
                </motion.p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 z-10 w-full relative">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                        className={`glass-panel p-6 rounded-2xl border border-dark-700 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md bg-dark-800/60 group ${point.border}`}
                    >
                        <div className={`w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-dark-800`}>
                            <point.icon className={`w-6 h-6 ${point.color}`} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                        <p className="text-dark-300 text-sm font-medium leading-relaxed">{point.desc}</p>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
