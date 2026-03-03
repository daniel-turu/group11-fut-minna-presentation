import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TimelineBackground from "../illustrations/TimelineBackground";

export default function Slide17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-theme-cyan/5">
      <TimelineBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 relative flex flex-col items-center"
      >
        <div className="mb-6 p-4 rounded-full bg-theme-blue/10 text-theme-blue border border-theme-blue/20">
          <Sparkles className="w-12 h-12" />
        </div>

        <h1 className="text-7xl font-black text-white tracking-tight mb-6">
          Thank{" "}
          <span className="text-gradient hover:animate-pulse cursor-default transition-all">
            You
          </span>
        </h1>
      </motion.div>
    </div>
  );
}
