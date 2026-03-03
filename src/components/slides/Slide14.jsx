import { motion } from "framer-motion";
import { ShieldCheck, UserX, Network, BrainCircuit } from "lucide-react";

export default function Slide14() {
  const points = [
    {
      title: "Data Protection",
      icon: ShieldCheck,
      desc: "Robust encryption protocols to protect user privacy.",
      color: "text-theme-blue",
    },
    {
      title: "Cyber Attack Prevention",
      icon: UserX,
      desc: "Proactive threat detection to mitigate DDoS attacks.",
      color: "text-red-500",
    },
    {
      title: "Network Security",
      icon: Network,
      desc: "Decentralized trust models and blockchain integration.",
      color: "text-theme-cyan",
    },
    {
      title: "Ethical AI Usage",
      icon: BrainCircuit,
      desc: "Ensuring AI actions remain unbiased and transparent.",
      color: "text-theme-purple",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between px-16 relative">
      {/* Left Column: Text & Features (Larger Layout) */}
      <div className="flex-[1] pr-12 z-10 flex flex-col justify-center h-full">
        <div className="mb-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-red-500 uppercase tracking-[0.3em] text-base font-bold mb-3 block">
              Critical Considerations
            </span>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              Security & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-theme-purple">
                Ethics
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 z-10 w-full max-w-xl">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              className={`glass-panel p-4 rounded-2xl border border-dark-700 hover:border-red-500/30 transition-all duration-300 group hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)] bg-dark-800/60 overflow-hidden relative`}
            >
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`p-3 rounded-xl bg-dark-900 border border-dark-700 group-hover:border-red-500/20 transition-colors shadow-sm shrink-0`}
                >
                  <point.icon className={`w-6 h-6 ${point.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-dark-200 text-base font-bold leading-relaxed">
                    {point.desc}
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
        className="flex-[1.2] h-[640px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(239,68,68,0.15)] bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-900/30 z-10 pointer-events-none"></div>

        <img
          src="/6g-security.png"
          alt="Cybersecurity Operations and Data Protection"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
