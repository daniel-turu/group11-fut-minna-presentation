import { motion } from 'framer-motion';
import NetworkHero from '../illustrations/NetworkHero';

export default function Slide1() {
    return (
        <div className="w-full h-full flex items-center justify-between px-12 relative">
            <div className="flex-1 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-theme-cyan/30 bg-theme-cyan/10 text-theme-cyan text-sm font-semibold tracking-wider mb-6">
                        FINAL PRESENTATION
                    </div>

                    <h1 className="text-6xl font-bold leading-tight mb-4 tracking-tight">
                        <span className="text-white">5G, 6G, and </span>
                        <span className="text-gradient">Beyond:</span>
                        <br />
                        <span className="text-4xl text-dark-100">The Future of Wireless Networking</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <h2 className="text-2xl text-theme-purple font-semibold mb-12 flex items-center gap-3">
                        Group 11 Presentation
                        <div className="h-[1px] w-24 bg-gradient-to-r from-theme-purple to-transparent"></div>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="grid grid-cols-2 gap-6 mt-12 max-w-lg"
                >
                    <div className="flex flex-col">
                        <span className="text-theme-cyan/80 font-semibold text-xs uppercase tracking-widest mb-1">Course</span>
                        <span className="font-medium text-dark-200">CPT511</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-theme-cyan/80 font-semibold text-xs uppercase tracking-widest mb-1">Lecturer</span>
                        <span className="font-medium text-dark-200">Dr. Adekpoju</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-theme-cyan/80 font-semibold text-xs uppercase tracking-widest mb-1">Institution</span>
                        <span className="font-medium text-dark-200">Federal University of Technology Minna</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-theme-cyan/80 font-semibold text-xs uppercase tracking-widest mb-1">Date</span>
                        <span className="font-medium text-dark-200">March 4, 2026</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="flex-1 h-full relative flex items-center justify-center pt-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-dark-900 via-transparent to-transparent z-10" />
                <NetworkHero />
            </motion.div>
        </div>
    );
}
