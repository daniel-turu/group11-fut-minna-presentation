import { motion } from 'framer-motion';
import { Camera, Bot, CarFront, Users2, Focus } from 'lucide-react';

export default function Slide12() {
    const applications = [
        {
            title: "Holographic Communication",
            icon: Camera,
            desc: "Real-time 3D holograms eliminating the limits of remote presence.",
            color: "from-theme-cyan/20 to-transparent",
            iconColor: "text-theme-cyan",
            colSpan: "col-span-1"
        },
        {
            title: "Smart Robotics",
            icon: Bot,
            desc: "Cloud-controlled robotic swarms for industrial and personal assistance.",
            color: "from-theme-purple/20 to-transparent",
            iconColor: "text-theme-purple",
            colSpan: "col-span-1"
        },
        {
            title: "Digital Twins",
            icon: Users2,
            desc: "Instantly updated virtual replicas of entire cities, factories, or human bodies.",
            color: "from-theme-blue/20 to-transparent",
            iconColor: "text-theme-blue",
            colSpan: "col-span-2"
        },
        {
            title: "Fully Autonomous Vehicles",
            icon: CarFront,
            desc: "Level 5 automation driven by hyper-fast AI cloud reflexes and V2X.",
            color: "from-theme-blue/20 to-transparent",
            iconColor: "text-theme-blue",
            colSpan: "col-span-1"
        },
        {
            title: "Advanced VR",
            icon: Focus,
            desc: "Fully immersive sensory internet replacing traditional screens completely.",
            color: "from-theme-cyan/20 to-transparent",
            iconColor: "text-theme-cyan",
            colSpan: "col-span-1"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center px-16 relative">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center z-10"
            >
                <span className="text-theme-cyan uppercase tracking-[0.3em] text-xs font-bold mb-2 block">Sci-Fi Becomes Reality</span>
                <h2 className="text-4xl font-black text-white">
                    6G <span className="text-gradient">Applications</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-5 w-full z-10 max-w-4xl mx-auto">
                {applications.map((app, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                        className={`glass-panel p-5 rounded-2xl border border-dark-700 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl bg-dark-800/60 overflow-hidden relative group ${app.colSpan}`}
                    >
                        {/* Background Accent Gradient */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${app.color} rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-[2] transition-transform duration-700`}></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-dark-800 border border-dark-700 rounded-xl shadow-sm">
                                    <app.icon className={`w-5 h-5 ${app.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight">{app.title}</h3>
                            </div>
                            <p className="text-dark-300 font-medium text-sm leading-relaxed max-w-[95%]">
                                {app.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
