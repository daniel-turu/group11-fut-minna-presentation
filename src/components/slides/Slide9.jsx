import { motion } from "framer-motion";
import {
  ShieldAlert,
  BatteryWarning,
  Banknote,
  SignalLow,
  RadioTower,
} from "lucide-react";

export default function Slide9() {
  const challenges = [
    {
      icon: Banknote,
      title: "Expensive Infrastructure",
      desc: "Deploying thousands of new base stations and fiber optic cables requires massive capital investment.",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      icon: SignalLow,
      title: "Limited Coverage Range",
      desc: "Millimeter waves cannot travel far and are easily blocked by walls, trees, and rain.",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
    {
      icon: RadioTower,
      title: "Base Station Density",
      desc: "Requires significantly more towers and small cells than 4G to maintain consistent coverage.",
      color: "text-yellow-600",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      icon: BatteryWarning,
      title: "High Power Consumption",
      desc: "Advanced antennas and continuous data processing demands significantly more electricity.",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
    {
      icon: ShieldAlert,
      title: "Security Risks",
      desc: "Millions of newly connected IoT devices massively increase the potential attack surface.",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between px-16 relative">
      {/* Left Column: Text & Features */}
      <div className="flex-[1] pr-12 z-10 flex flex-col justify-center h-full">
        <div className="mb-4 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-orange-600 uppercase tracking-[0.3em] text-base font-bold mb-3 block">
              Implementation Hurdles
            </span>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              5G{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                Challenges
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2 z-10 w-full max-w-xl">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              className={`glass-panel p-3 rounded-2xl border border-dark-700 hover:${item.border} transition-all duration-300 group hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)] bg-dark-800/60 overflow-hidden relative`}
            >
              <div className="flex items-center gap-2 relative z-10">
                <div
                  className={`p-3 rounded-xl bg-dark-900 border ${item.border} transition-colors shadow-sm shrink-0`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-dark-300 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column: Realistic Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="flex-[1.2] h-[600px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(239,68,68,0.1)] bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-900/40 z-10 pointer-events-none"></div>

        <img
          src="/5g-challenges-hero.png"
          alt="Telecommunications Infrastructure Challenges"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
