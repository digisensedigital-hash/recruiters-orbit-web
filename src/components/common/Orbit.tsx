import { motion } from "framer-motion"

export default function Orbit() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

      {/* OUTER ORBIT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="w-[340px] h-[340px] border border-purple-500/30 rounded-full"
      />

      {/* INNER ORBIT */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="absolute w-[220px] h-[220px] border border-cyan-400/30 rounded-full"
      />

      {/* DOT 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute w-[340px] h-[340px]"
      >
        <div className="w-2.5 h-2.5 bg-purple-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.7)]" />
      </motion.div>

      {/* DOT 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        className="absolute w-[220px] h-[220px]"
      >
        <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
      </motion.div>

    </div>
  )
}