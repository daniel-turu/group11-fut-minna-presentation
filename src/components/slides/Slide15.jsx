import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  Factory,
  TrendingUp,
  Smile,
} from "lucide-react";

export default function Slide15() {
  const impacts = [
    {
      title: "Improved Healthcare",
      icon: HeartPulse,
      desc: "Remote diagnostics and robotic surgery.",
      color: "text-rose-500",
    },
    {
      title: "Better Education",
      icon: GraduationCap,
      desc: "Immersive VR classrooms for remote learning.",
      color: "text-theme-blue",
    },
    {
      title: "Smart Industries",
      icon: Factory,
      desc: "Industry 4.0 automation and robotics.",
      color: "text-orange-500",
    },
    {
      title: "Economic Growth",
      icon: TrendingUp,
      desc: "Creation of new digital markets and jobs.",
      color: "text-emerald-500",
    },
    {
      title: "Quality of Life",
      icon: Smile,
      desc: "Smarter cities, reduced traffic, clean energy.",
      color: "text-theme-cyan",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between px-16 relative">
      {/* Left Column: Text & Features (Larger Layout) */}
      <div className="flex-[1.2] pr-12 z-10 flex flex-col justify-center h-full">
        <div className="mb-10 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-emerald-600 uppercase tracking-[0.3em] text-sm font-bold mb-2 block">
              The Big Picture
            </span>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              Impact on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-theme-cyan">
                Society
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 z-10 w-full max-w-3xl">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              className={`glass-panel p-4 rounded-2xl border border-dark-700 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] bg-dark-800/60 overflow-hidden relative ${index === 4 ? "col-span-2" : ""}`}
            >
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`p-3 rounded-xl bg-dark-900 border border-dark-700 group-hover:border-emerald-500/20 transition-colors shadow-sm shrink-0`}
                >
                  <impact.icon className={`w-6 h-6 ${impact.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-white mb-1 leading-tight">
                    {impact.title}
                  </h3>
                  <p className="text-dark-200 text-[13px] font-medium leading-relaxed">
                    {impact.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column: High-Res Image Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="flex-[0.8] h-[640px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(16,185,129,0.15)] bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-dark-900/10 to-dark-900/60 z-10 pointer-events-none"></div>

        <img
          src="/6g-society.png"
          alt="Futuristic Healthcare and Robotic Surgery"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
