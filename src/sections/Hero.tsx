import { motion } from "framer-motion"
import Orbit from "../components/common/Orbit"
import DashboardPreview from "../components/common/DashboardPreview"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative px-6 mt-24 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      {/* HERO CONTENT WRAPPER */}
      <div className="relative text-center max-w-4xl mx-auto">

        {/* ORBIT (LOCKED TO HERO CONTENT) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Orbit />
        </div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-7xl font-bold leading-[1.1] tracking-[-1.5px]"
        >
          Recruit. Track. <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Close Faster.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-6 text-gray-400 max-w-xl mx-auto text-lg leading-relaxed"
        >
          The modern ATS + CRM built for recruitment agencies to manage candidates,
          clients, and deals — all in one orbit.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 mt-8 flex justify-center gap-4"
        >
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-lg font-medium hover:scale-105 active:scale-95 transition-all duration-200">
            Start Free Trial
          </button>

          <Link to="/book-demo">
            <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5 transition">
              Book Demo
            </button>
          </Link>
        </motion.div>

      </div>

      {/* DASHBOARD (SEPARATE LAYER) */}
      <DashboardPreview />

    </section>
  )
}