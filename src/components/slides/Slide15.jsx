import { motion } from 'framer-motion';
import { HeartPulse, GraduationCap, Factory, TrendingUp, Smile } from 'lucide-react';

export default function Slide15() {
    const impacts = [
        {
            title: "Improved Healthcare",
            icon: HeartPulse,
            desc: "Remote diagnostics, robotic surgery, and real-time wearables.",
            color: "from-rose-500/20 to-transparent",
            iconColor: "text-rose-500"
        },
        {
            title: "Better Education",
            icon: GraduationCap,
            desc: "Immersive VR classrooms and equal access to high-quality remote learning.",
            color: "from-theme-blue/20 to-transparent",
            iconColor: "text-theme-blue"
        },
        {
            title: "Smart Industries",
            icon: Factory,
            desc: "Industry 4.0 automation, predictive maintenance, and robotic efficiency.",
            color: "from-orange-500/20 to-transparent",
            iconColor: "text-orange-500"
        },
        {
            title: "Economic Growth",
            icon: TrendingUp,
            desc: "Creation of entirely new digital markets and tech-driven job sectors.",
            color: "from-emerald-500/20 to-transparent",
            iconColor: "text-emerald-500"
        },
        {
            title: "Quality of Life",
            icon: Smile,
            desc: "Smarter cities, reduced traffic, cleaner environments, and connected homes.",
            color: "from-theme-cyan/20 to-transparent",
            iconColor: "text-theme-cyan"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center px-12 relative overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center z-10 w-full"
            >
                <span className="text-emerald-600 uppercase tracking-[0.3em] text-xs font-bold mb-2 block">The Big Picture</span>
                <h2 className="text-4xl font-black text-white">
                    Impact on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-theme-cyan">Society</span>
                </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-5 w-full z-10 max-w-5xl mx-auto">
                {impacts.map((impact, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, type: "spring" }}
                        className={`glass-panel p-5 rounded-2xl border border-dark-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-dark-800/60 overflow-hidden relative group w-[30%] min-w-[250px]`}
                    >
                        {/* Background Accent Gradient */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${impact.color} rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-dark-800 border border-dark-700 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    <impact.icon className={`w-6 h-6 ${impact.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight">{impact.title}</h3>
                            </div>
                            <p className="text-dark-300 font-medium text-sm leading-relaxed">
                                {impact.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
