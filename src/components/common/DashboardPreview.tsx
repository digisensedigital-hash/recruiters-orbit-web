import { motion } from "framer-motion"

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      className="mt-24 flex justify-center px-6 perspective-[1200px] relative"
    >
      {/* GLOW UNDER CARD */}
      <div className="absolute w-[60%] h-[60px] bg-purple-500/20 blur-[50px] rounded-full bottom-[-20px]" />

      {/* FLOATING CARD */}
      <motion.div
        whileHover={{ rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] overflow-hidden"
      >
        {/* TOP BAR */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-4 h-[320px]">

          {/* SIDEBAR */}
          <div className="col-span-1 border-r border-white/10 p-4 space-y-3 text-sm text-gray-400">
            <div className="text-white font-semibold">Dashboard</div>
            <div>Pipeline</div>
            <div>Candidates</div>
            <div>Clients</div>
          </div>

          {/* MAIN PANEL */}
          <div className="col-span-3 p-4 space-y-4">

            {/* HEADER */}
            <div className="text-sm text-gray-400">Pipeline Overview</div>

            {/* PIPELINE CARDS */}
            <div className="grid grid-cols-3 gap-4">

              <div className="h-24 bg-purple-500/20 rounded-lg border border-purple-500/20 flex items-center justify-center text-xs hover:scale-105 transition">
                Applied
              </div>

              <div className="h-24 bg-cyan-500/20 rounded-lg border border-cyan-500/20 flex items-center justify-center text-xs hover:scale-105 transition">
                Interview
              </div>

              <div className="h-24 bg-green-500/20 rounded-lg border border-green-500/20 flex items-center justify-center text-xs hover:scale-105 transition">
                Hired
              </div>

            </div>

            {/* ACTIVITY */}
            <div className="h-24 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-xs text-gray-400">
              Activity Feed
            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}