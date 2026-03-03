import { motion } from 'framer-motion';
import { RadioReceiver, Waves, MoveRight, Network, Server } from 'lucide-react';

export default function Slide7() {
    const technologies = [
        {
            icon: RadioReceiver,
            title: "Massive MIMO",
            desc: "Multiple antennas at base stations exponentially increase capacity and simultaneous connections.",
            color: "text-theme-cyan"
        },
        {
            icon: MoveRight,
            title: "Beamforming",
            desc: "Directs targeted signals toward specific users rather than broadcasting in all directions.",
            color: "text-theme-blue"
        },
        {
            icon: Waves,
            title: "Millimeter Waves",
            desc: "Utilizes higher frequency bands (mmWave) to enable vastly faster data transmission speeds.",
            color: "text-theme-purple"
        },
        {
            icon: Network,
            title: "Network Slicing",
            desc: "Creates multiple independent virtual networks on a single physical infrastructure.",
            color: "text-theme-blue"
        },
        {
            icon: Server,
            title: "Edge Computing",
            desc: "Processes data closer to the source, ensuring faster processing and lower latency.",
            color: "text-theme-cyan"
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-between px-12 relative overflow-hidden">

            {/* Left Column: Title and Illustration */}
            <div className="flex-1 pr-12 z-10 flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="text-theme-purple uppercase tracking-[0.2em] text-base font-bold mb-3 block">Core Innovations</span>
                    <h2 className="text-6xl font-black text-white leading-tight">
                        5G Key <br />
                        <span className="text-gradient">Technologies</span>
                    </h2>
                </motion.div>

                {/* Tech Hero Image */}
                <motion.div
                    className="relative w-full h-[320px] mt-6 glass-panel rounded-3xl border border-dark-700 overflow-hidden flex items-center justify-center bg-dark-900 group shadow-[0_0_30px_rgba(37,99,235,0.1)]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Glowing Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent z-10 pointer-events-none"></div>

                    <img
                        src="/5g-tech.png"
                        alt="5G Key Technologies Concept"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out object-center"
                    />
                </motion.div>
            </div>

            {/* Right Column: Technology Nodes */}
            <div className="flex-1 border-l border-dark-700 pl-8 py-8 relative z-10">
                <div className="space-y-8">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                            className="flex items-start gap-5 group"
                        >
                            <div className="p-4 rounded-full bg-dark-800 border border-dark-700 shadow-sm group-hover:scale-110 group-hover:border-theme-blue/30 transition-all duration-300 relative z-10 shrink-0">
                                <tech.icon className={`w-6 h-6 ${tech.color}`} />
                            </div>
                            <div className="pt-1">
                                <h3 className="text-xl font-bold text-white group-hover:text-theme-blue transition-colors mb-2">{tech.title}</h3>
                                <p className="text-base font-medium text-dark-300 leading-relaxed">{tech.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Vertical connection line for nodes */}
                <div className="absolute left-[2.9rem] top-12 bottom-12 w-[1px] bg-dark-700 z-0"></div>
            </div>

        </div>
    );
}
