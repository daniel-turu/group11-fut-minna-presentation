import { motion } from "framer-motion";

export default function TimelineBackground() {
  const nodes = [
    { label: "1G", x: "10%", y: "80%", color: "#94a3b8" }, // slate-400
    { label: "2G", x: "25%", y: "65%", color: "#cbd5e1" }, // slate-300
    { label: "3G", x: "40%", y: "50%", color: "#06b6d4" }, // cyan-500
    { label: "4G", x: "55%", y: "40%", color: "#3b82f6" }, // blue-500
    { label: "5G", x: "70%", y: "25%", color: "#8b5cf6" }, // violet-500
    { label: "6G", x: "85%", y: "35%", color: "#d946ef" }, // fuchsia-500
    { label: "Beyond", x: "95%", y: "15%", color: "#0ea5e9" }, // sky-500
  ];

  // Create an array of path instructions connecting the nodes
  // Using simple lines between the coordinates
  const pathD = `M 10 80 L 25 65 L 40 50 L 55 40 L 70 25 L 85 35 L 95 15`;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="timelineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Animated Connecting Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#timelineGrad)"
          strokeWidth="0.4"
          strokeDasharray="1 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Nodes and Labels */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Ping Animation for active nodes (5G onwards) */}
            {i >= 4 && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="1.5"
                fill="none"
                stroke={node.color}
                strokeWidth="0.2"
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
              />
            )}

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="0.8"
              fill={node.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.6 + 0.5 }}
            />

            <motion.text
              x={node.x}
              y={parseFloat(node.y) + 4 + "%"}
              fill={node.color}
              fontSize="2"
              fontWeight="bold"
              textAnchor="middle"
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.6 + 0.7 }}
              style={{ filter: `drop-shadow(0px 0px 2px ${node.color})` }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
