import { motion } from 'framer-motion';
import { RadioReceiver, Brain, Target, Globe, Server } from 'lucide-react';

export default function Slide11() {
    const technologies = [
        {
            icon: RadioReceiver,
            title: "Terahertz Frequency Communication",
            desc: "Operating between 0.1-10 THz to achieve unprecedented speeds and bandwidth.",
            color: "text-theme-cyan"
        },
        {
            icon: Brain,
            title: "Artificial Intelligence Integration",
            desc: "Natively integrated AI for self-optimizing, intelligent network operations.",
            color: "text-theme-purple"
        },
        {
            icon: Target,
            title: "Intelligent Reflecting Surfaces",
            desc: "Smart environments that dynamically reflect signals to bypass physical obstacles.",
            color: "text-theme-blue"
        },
        {
            icon: Globe,
            title: "Satellite Integration",
            desc: "Seamlessly merging terrestrial and non-terrestrial networks for global coverage.",
            color: "text-theme-cyan"
        },
        {
            icon: Server,
            title: "Advanced Edge Computing",
            desc: "Distributing computational power pervasively to achieve sub-millisecond delays.",
            color: "text-theme-blue"
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
                    <span className="text-theme-purple uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Foundational Shifts</span>
                    <h2 className="text-5xl font-black text-white leading-tight">
                        6G <span className="text-gradient">Technologies</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-dark-200 text-lg leading-relaxed font-medium mb-10 pl-4 border-l-4 border-theme-purple"
                >
                    These foundational elements will enable extremely fast and reliable communication globally, closing the connectivity gap even in remote areas.
                </motion.p>
            </div>

            <div className="flex-1 flex flex-col gap-4 z-10 w-full relative">
                {/* Decorative background line connecting nodes */}
                <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-theme-cyan via-theme-blue to-theme-purple opacity-30 z-0"></div>

                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                        className="flex items-center gap-6 group relative z-10"
                    >
                        <div className={`p-4 rounded-full bg-dark-800 border border-dark-700 shadow-sm group-hover:scale-110 group-hover:border-theme-purple/40 transition-all duration-300 relative`}>
                            {/* Pulse effect */}
                            <div className="absolute inset-0 rounded-full border border-theme-purple/0 group-hover:border-theme-purple/50 group-hover:animate-ping opacity-0 group-hover:opacity-100"></div>
                            <tech.icon className={`w-5 h-5 ${tech.color}`} />
                        </div>

                        <div className="glass-panel p-4 rounded-2xl border border-dark-700 group-hover:border-theme-purple/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_4px_20px_rgba(126,34,206,0.08)] flex-1 bg-dark-800/60">
                            <h3 className="text-white font-bold text-[16px] mb-1">{tech.title}</h3>
                            <p className="text-dark-300 text-[13px] font-medium leading-relaxed">{tech.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
