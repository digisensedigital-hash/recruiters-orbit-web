import { motion } from "framer-motion"

export default function Particles() {
  const dots = Array.from({ length: 20 })

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: Math.random() * 800,
            x: Math.random() * 1200
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
        />
      ))}
    </div>
  )
}