import { motion } from "framer-motion";
import { Camera, Bot, CarFront, Users2, Focus } from "lucide-react";

export default function Slide12() {
  const applications = [
    {
      title: "Holographic Communication",
      icon: Camera,
      desc: "Real-time 3D holograms eliminating the limits of remote presence.",
      color: "from-theme-cyan/20 to-transparent",
      iconColor: "text-theme-cyan",
    },
    {
      title: "Smart Robotics",
      icon: Bot,
      desc: "Cloud-controlled robotic swarms for industrial and personal assistance.",
      color: "from-theme-purple/20 to-transparent",
      iconColor: "text-theme-purple",
    },
    {
      title: "Digital Twins",
      icon: Users2,
      desc: "Instantly updated virtual replicas of entire cities, factories, or human bodies.",
      color: "from-theme-blue/20 to-transparent",
      iconColor: "text-theme-blue",
    },
    {
      title: "Fully Autonomous Vehicles",
      icon: CarFront,
      desc: "Level 5 automation driven by hyper-fast AI cloud reflexes and V2X.",
      color: "from-theme-blue/20 to-transparent",
      iconColor: "text-theme-blue",
    },
    {
      title: "Advanced VR",
      icon: Focus,
      desc: "Fully immersive sensory internet replacing traditional screens completely.",
      color: "from-theme-cyan/20 to-transparent",
      iconColor: "text-theme-cyan",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between px-16 relative">
      {/* Left Column: Text & Features */}
      <div className="flex-[1.2] pr-12 z-10 flex flex-col justify-center h-full">
        <div className="mb-10 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-theme-cyan uppercase tracking-[0.3em] text-base font-bold mb-3 block">
              Sci-Fi Becomes Reality
            </span>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              6G <span className="text-gradient">Applications</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-5 z-10 w-full max-w-3xl">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              className={`glass-panel p-3.5 rounded-2xl border border-dark-700 hover:border-theme-cyan/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)] bg-dark-800/60 overflow-hidden relative ${index === 2 ? "col-span-2" : ""}`}
            >
              {/* Background Accent Gradient */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${app.color} rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 opacity-50`}
              ></div>

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`p-3.5 rounded-xl bg-dark-900 border border-dark-700 group-hover:border-theme-cyan/20 transition-colors shadow-sm shrink-0`}
                >
                  <app.icon className={`w-6 h-6 ${app.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1 leading-tight">
                    {app.title}
                  </h3>
                  <p className="text-dark-300 text-sm font-bold leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column: Realistic Hologram Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="flex-[0.8] h-[560px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(34,211,238,0.15)] bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-dark-900/10 to-dark-900/60 z-10 pointer-events-none"></div>

        <img
          src="/6g-hologram.png"
          alt="Realistic 6G Holographic Communication"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
