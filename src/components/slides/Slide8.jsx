import { motion } from 'framer-motion';
import { Building2, Car, Stethoscope, Home, Glasses } from 'lucide-react';

export default function Slide8() {
    const applications = [
        {
            title: "Smart Cities",
            icon: Building2,
            desc: "Intelligent traffic management, public safety grids, and efficient utilities.",
            colSpan: "col-span-2",
            color: "from-theme-cyan/20 to-transparent",
            iconColor: "text-theme-cyan"
        },
        {
            title: "Autonomous Vehicles",
            icon: Car,
            desc: "Vehicle-to-everything (V2X) communication for real-time safety and navigation.",
            colSpan: "col-span-2",
            color: "from-theme-blue/20 to-transparent",
            iconColor: "text-theme-blue"
        },
        {
            title: "Telemedicine",
            icon: Stethoscope,
            desc: "Enables remote surgery, patient monitoring, and instant medical data sharing.",
            colSpan: "col-span-4",
            color: "from-theme-purple/20 to-transparent",
            iconColor: "text-theme-purple"
        },
        {
            title: "IoT & Smart Homes",
            icon: Home,
            desc: "Seamlessly connects billions of home appliances, sensors, and security systems.",
            colSpan: "col-span-2",
            color: "from-theme-blue/20 to-transparent",
            iconColor: "text-theme-blue"
        },
        {
            title: "VR / AR",
            icon: Glasses,
            desc: "Immersive virtual and augmented reality experiences with zero lag.",
            colSpan: "col-span-2",
            color: "from-theme-cyan/20 to-transparent",
            iconColor: "text-theme-cyan"
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
                <span className="text-theme-blue uppercase tracking-[0.3em] text-xs font-bold mb-2 block">Real-world Impact</span>
                <h2 className="text-4xl font-black text-white">
                    5G <span className="text-gradient">Applications</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-4 gap-4 w-full z-10 max-w-5xl mx-auto">
                {applications.map((app, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                        className={`glass-panel p-6 rounded-2xl border border-dark-700 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl bg-dark-800/60 overflow-hidden relative group ${app.colSpan}`}
                    >
                        {/* Background Accent Gradient */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${app.color} rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-dark-800 border border-dark-700 rounded-xl shadow-sm">
                                    <app.icon className={`w-6 h-6 ${app.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white leading-tight">{app.title}</h3>
                            </div>
                            <p className="text-dark-300 font-medium text-sm leading-relaxed max-w-[90%]">
                                {app.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
