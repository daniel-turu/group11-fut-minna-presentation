import { motion } from "framer-motion";
import { Wifi, BrainCircuit, Network, Zap } from "lucide-react";

export default function Slide16() {
  const points = [
    {
      icon: Wifi,
      text: "5G transforms society with massive speeds and connectivity.",
      color: "text-theme-cyan",
    },
    {
      icon: BrainCircuit,
      text: "6G brings natively intelligent, AI-driven networking.",
      color: "text-theme-purple",
    },
    {
      icon: Network,
      text: "Connecting everything from microscopic sensors to cities.",
      color: "text-theme-blue",
    },
    {
      icon: Zap,
      text: "The critical backbone for all future technological development.",
      color: "text-emerald-500",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between px-16 relative">
      {/* Left Column: Text & Features (Larger Layout) */}
      <div className="flex-[1] pr-12 z-10 flex flex-col justify-center h-full">
        <div className="mb-10 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-dark-400 uppercase tracking-[0.3em] text-sm font-bold mb-2 block">
              Summary
            </span>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              <span className="text-gradient">Conclusion</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 z-10 w-full max-w-xl">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
              className={`glass-panel p-5 rounded-3xl border border-dark-700 hover:border-dark-600 transition-all duration-300 group hover:translate-x-3 hover:shadow-lg bg-dark-800/60 overflow-hidden relative`}
            >
              <div className="flex items-start gap-5 relative z-10">
                <div
                  className={`p-4 rounded-2xl bg-dark-900 border border-dark-700 group-hover:bg-dark-800 transition-colors shadow-sm shrink-0`}
                >
                  <point.icon className={`w-7 h-7 ${point.color}`} />
                </div>
                <p className="text-dark-200 text-[16px] font-medium leading-relaxed pt-1 flex-1">
                  {point.text}
                </p>
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
        className="flex-[1.2] h-[640px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-2xl bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-900/50 z-10 pointer-events-none"></div>

        <img
          src="/conclusion.png"
          alt="Bright Future Dawn of Connectivity"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
