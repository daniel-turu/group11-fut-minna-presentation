import { motion } from "framer-motion";
import { RadioReceiver, Brain, Target, Globe, Server } from "lucide-react";

export default function Slide11() {
  const technologies = [
    {
      icon: RadioReceiver,
      title: "Terahertz Frequency Communication",
      desc: "Operating between 0.1-10 THz to achieve unprecedented speeds and bandwidth.",
      color: "text-theme-cyan",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence Integration",
      desc: "Natively integrated AI for self-optimizing, intelligent network operations.",
      color: "text-theme-purple",
    },
    {
      icon: Target,
      title: "Intelligent Reflecting Surfaces",
      desc: "Smart environments that dynamically reflect signals to bypass physical obstacles.",
      color: "text-theme-blue",
    },
    {
      icon: Globe,
      title: "Satellite Integration",
      desc: "Seamlessly merging terrestrial and non-terrestrial networks for global coverage.",
      color: "text-theme-cyan",
    },
    {
      icon: Server,
      title: "Advanced Edge Computing",
      desc: "Distributing computational power pervasively to achieve sub-millisecond delays.",
      color: "text-theme-blue",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between px-16 relative">
      {/* Left Column: Text & Features */}
      <div className="flex-[1] pr-12 z-10 flex flex-col justify-center h-full">
        <div className="mb-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-theme-purple uppercase tracking-[0.3em] text-xs font-bold mb-2 block">
              Foundational Shifts
            </span>
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
              6G <span className="text-gradient">Technologies</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 z-10 w-full max-w-xl">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              className="glass-panel p-3.5 rounded-2xl border border-dark-700 hover:border-theme-purple/30 transition-all duration-300 group hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(126,34,206,0.08)] bg-dark-800/60 overflow-hidden relative"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`p-2.5 rounded-xl bg-dark-900 border border-dark-700 group-hover:border-theme-purple/20 transition-colors shadow-sm shrink-0`}
                >
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-bold text-white mb-0.5 leading-tight">
                    {tech.title}
                  </h3>
                  <p className="text-dark-300 text-xs font-medium leading-relaxed">
                    {tech.desc}
                  </p>
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
        className="flex-[1.2] h-[600px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(126,34,206,0.15)] bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-900/30 z-10 pointer-events-none"></div>

        <img
          src="/6g-tech.png"
          alt="Futuristic 6G Network Ecosystem"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
