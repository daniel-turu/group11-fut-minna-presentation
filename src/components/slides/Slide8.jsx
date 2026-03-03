import { motion } from "framer-motion";
import { Building2, Car, Stethoscope, Home, Glasses } from "lucide-react";

export default function Slide8() {
  const applications = [
    {
      title: "Smart Cities",
      icon: Building2,
      desc: "Intelligent traffic management and efficient utilities.",
      color: "from-theme-cyan/20 to-transparent",
      iconColor: "text-theme-cyan",
    },
    {
      title: "Autonomous Vehicles",
      icon: Car,
      desc: "V2X communication for real-time safety and navigation.",
      color: "from-theme-blue/20 to-transparent",
      iconColor: "text-theme-blue",
    },
    {
      title: "Telemedicine",
      icon: Stethoscope,
      desc: "Enables remote surgery and instant medical data sharing.",
      color: "from-theme-purple/20 to-transparent",
      iconColor: "text-theme-purple",
    },
    {
      title: "IoT & Smart Homes",
      icon: Home,
      desc: "Seamlessly connects home appliances and security systems.",
      color: "from-theme-blue/20 to-transparent",
      iconColor: "text-theme-blue",
    },
    {
      title: "VR / AR",
      icon: Glasses,
      desc: "Immersive virtual and augmented reality experiences.",
      color: "from-theme-cyan/20 to-transparent",
      iconColor: "text-theme-cyan",
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
            <span className="text-theme-blue uppercase tracking-[0.3em] text-xs font-bold mb-2 block">
              Real-world Impact
            </span>
            <h2 className="text-5xl font-black text-white tracking-tight">
              5G <span className="text-gradient">Applications</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 z-10 w-full max-w-xl">
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
              className="glass-panel p-3.5 rounded-2xl border border-dark-700 hover:border-theme-blue/30 transition-all duration-300 group hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] bg-dark-800/60 overflow-hidden relative"
            >
              {/* Background Accent Gradient */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${app.color} rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700 opacity-50`}
              ></div>

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`p-2.5 rounded-xl bg-dark-900 border border-dark-700 group-hover:border-theme-blue/20 transition-colors shadow-sm shrink-0`}
                >
                  <app.icon className={`w-5 h-5 ${app.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-bold text-white mb-0.5 leading-tight">
                    {app.title}
                  </h3>
                  <p className="text-dark-300 text-xs font-medium leading-relaxed">
                    {app.desc}
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
        className="flex-[1.2] h-[600px] rounded-3xl overflow-hidden glass-panel border border-dark-700 relative group z-10 shadow-[0_0_40px_rgba(37,99,235,0.15)] bg-dark-900"
      >
        {/* Soft gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-900/40 z-10 pointer-events-none"></div>

        <img
          src="/5g-city.png"
          alt="Realistic Smart City with 5G"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out object-center"
        />
      </motion.div>
    </div>
  );
}
