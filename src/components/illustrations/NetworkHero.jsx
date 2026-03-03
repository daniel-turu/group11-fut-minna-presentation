export default function NetworkHero() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-white/10 z-0">
            <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Nodes */}
            <circle cx="100" cy="150" r="4" fill="#0891b2" className="animate-pulse" />
            <circle cx="200" cy="80" r="6" fill="#2563eb" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="300" cy="180" r="5" fill="#7e22ce" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="250" cy="250" r="4" fill="#0891b2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="70" cy="220" r="3" fill="#2563eb" />
            <circle cx="350" cy="100" r="7" fill="#0891b2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />

            {/* Core Node Glow */}
            <circle cx="200" cy="80" r="40" fill="url(#glow)" />
            <circle cx="350" cy="100" r="30" fill="url(#glow)" />

            {/* Lines connecting nodes */}
            <path d="M100,150 L200,80 L300,180 L350,100" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="opacity-90" />
            <path d="M200,80 L250,250 L300,180" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" fill="none" className="opacity-70" />
            <path d="M100,150 L70,220 L250,250" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="opacity-60" />
            <path d="M100,150 L250,250" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" className="opacity-50" />

            {/* Signal Waves */}
            <circle cx="200" cy="80" r="20" stroke="#0891b2" strokeWidth="1" fill="none" className="opacity-0 animate-[ping_3s_infinite]" />
            <circle cx="350" cy="100" r="15" stroke="#7e22ce" strokeWidth="1" fill="none" className="opacity-0 animate-[ping_4s_infinite]" style={{ animationDelay: '2s' }} />
        </svg>
    );
}
