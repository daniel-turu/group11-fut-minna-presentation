import { motion } from 'framer-motion';
import { MessageCircleQuestion, Sparkles } from 'lucide-react';

export default function Slide17() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12 relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-theme-cyan/5">

            {/* Abstract Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-theme-purple/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

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
                    Thank <span className="text-gradient hover:animate-pulse cursor-default transition-all">You</span>
                </h1>

                <p className="text-dark-300 text-xl font-medium max-w-lg mx-auto mb-12">
                    Thank you for joining our presentation on the future of wireless networking.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="glass-panel px-8 py-5 rounded-full border border-dark-700 flex items-center gap-4 hover:border-theme-blue/40 hover:shadow-lg transition-all cursor-pointer group bg-dark-800/80"
                >
                    <div className="p-2 bg-theme-blue/10 rounded-full text-theme-blue group-hover:bg-theme-blue group-hover:text-white transition-colors">
                        <MessageCircleQuestion className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-dark-100">Questions & Answers</span>
                </motion.div>
            </motion.div>

        </div>
    );
}
