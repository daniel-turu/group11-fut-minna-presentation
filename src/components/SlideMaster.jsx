import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SlideMaster({ current, total, onNext, onPrev }) {
    return (
        <div className="mt-6 flex items-center justify-between px-4 z-50">
            <div className="text-dark-100/60 text-sm font-medium tracking-wider">
                {current.toString().padStart(2, '0')} <span className="text-dark-100/30">/</span> {total.toString().padStart(2, '0')}
            </div>

            <div className="flex space-x-4">
                <button
                    onClick={onPrev}
                    disabled={current === 1}
                    className="p-2 rounded-full glass-panel hover:bg-dark-100/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                    <ChevronLeft className="w-5 h-5 text-dark-100/80 group-hover:text-theme-cyan transition-colors" />
                </button>
                <button
                    onClick={onNext}
                    disabled={current === total}
                    className="p-2 rounded-full glass-panel border-theme-cyan/30 hover:bg-theme-cyan/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                    <ChevronRight className="w-5 h-5 text-theme-cyan transition-colors" />
                </button>
            </div>

            <div className="text-dark-100/50 text-xs tracking-widest uppercase font-semibold">
                Wireless Networks
            </div>
        </div>
    );
}
