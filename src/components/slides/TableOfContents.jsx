import { motion } from "framer-motion";
import { List, ChevronRight } from "lucide-react";

export default function TableOfContents() {
    const contents = [
        { title: "Introduction to Wireless Networking", slide: "03" },
        { title: "Evolution of Generations (1G to 5G)", slide: "04" },
        { title: "5G Architecture & Technologies", slide: "05" },
        { title: "5G Applications & Challenges", slide: "08" },
        { title: "Introduction to 6G & Technologies", slide: "10" },
        { title: "6G Applications", slide: "12" },
        { title: "Beyond 6G", slide: "13" },
        { title: "Security, Ethics & Social Impact", slide: "14" },
        { title: "Conclusion", slide: "16" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center z-10 mb-10"
            >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-theme-blue/10 border border-theme-blue/20 text-theme-blue text-base font-bold tracking-widest uppercase mb-6 shadow-sm">
                    <List className="w-5 h-5" />
                    Table of Contents
                </div>
                <h2 className="text-6xl font-black text-white tracking-tight leading-none mb-4">
                    Presentation <span className="text-gradient">Overview</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-5 w-full max-w-5xl z-10">
                {contents.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="glass-panel p-5 rounded-xl border border-dark-700 flex items-center justify-between group hover:border-theme-blue/30 hover:bg-theme-blue/5 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-theme-blue/50 group-hover:text-theme-blue transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                                {item.title}
                            </span>
                        </div>
                        <div className="text-dark-300 font-bold font-mono text-sm group-hover:text-theme-blue transition-colors">
                            Slide {item.slide}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
