import { motion } from 'framer-motion';
import { Rocket, BrainCircuit, ActivitySquare, Sparkles } from 'lucide-react';

export default function Slide10() {
    const specs = [
        { label: "Launch Window", value: "~2030", desc: "Expected commercial deployment" },
        { label: "Max Speed", value: "1 Tbps", desc: "Terabits per second data transfer" },
        { label: "Latency", value: "< 0.1ms", desc: "Microsecond reaction times" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12 relative overflow-hidden">

            {/* Futuristic Background Gradients for 6G */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-theme-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-theme-cyan/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center z-10 mb-8"
            >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-theme-purple/10 border border-theme-purple/20 text-theme-purple text-base font-bold tracking-widest uppercase mb-6 shadow-sm">
                    <Sparkles className="w-5 h-5" />
                    The Next Frontier
                </div>
                <h2 className="text-7xl font-black text-white tracking-tight leading-none mb-6">
                    Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-purple via-theme-blue to-theme-cyan animate-pulse">6G</span>
                </h2>
                <p className="text-dark-300 text-2xl font-bold max-w-3xl mx-auto">
                    The sixth generation of wireless communication will blur the line between the physical and digital worlds.
                </p>
            </motion.div>

            <div className="flex w-full max-w-5xl gap-8 z-10">

                {/* Left Side: Stats / Specs */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 flex flex-col justify-center gap-3"
                >
                    {specs.map((spec, i) => (
                        <div key={i} className="glass-panel p-4 rounded-2xl border border-dark-700 border-l-4 border-l-theme-purple flex items-center justify-between group hover:-translate-y-1 transition-transform">
                            <div>
                                <span className="block text-dark-400 text-base font-bold tracking-wider uppercase mb-1">{spec.label}</span>
                                <span className="block text-dark-200 text-sm font-bold">{spec.desc}</span>
                            </div>
                            <div className="text-4xl font-black text-theme-purple tracking-tighter">
                                {spec.value}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Right Side: AI Feature Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex-[1.2] glass-panel p-6 rounded-3xl border border-dark-700 relative overflow-hidden group shadow-lg"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-theme-purple/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-theme-cyan/20 transition-colors duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-dark-800 border border-dark-700 shadow-sm rounded-2xl text-theme-purple">
                                <BrainCircuit className="w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-bold text-white leading-tight">AI-Driven <br />Intelligence</h3>
                        </div>

                        <p className="text-dark-200 text-xl leading-relaxed font-bold mb-8">
                            Unlike 5G which simply connects devices, 6G will integrate Artificial Intelligence natively into the network architecture. It will manage operations intuitively, predict network congestion, and optimize routing in real-time without human intervention.
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-3 text-base font-bold text-dark-100 bg-dark-800/40 border border-dark-700 p-4 rounded-xl">
                                <ActivitySquare className="w-6 h-6 text-theme-blue" /> Machine Learning
                            </div>
                            <div className="flex items-center gap-3 text-base font-bold text-dark-100 bg-dark-800/40 border border-dark-700 p-4 rounded-xl">
                                <Rocket className="w-6 h-6 text-theme-cyan" /> Sub-millisecond UX
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
