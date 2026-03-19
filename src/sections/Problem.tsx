import Reveal from "../components/common/Reveal"

export default function Problem() {
  return (
    <Reveal>
      <section className="mt-28 px-6 max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Recruitment is broken. <br />
          <span className="text-gray-400">
            Your tools shouldn’t be.
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Most recruitment teams are stuck juggling spreadsheets, tools, and manual workflows —
          slowing down hiring and losing placements.
        </p>

        {/* PROBLEM GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Too Many Tools
            </h3>
            <p className="text-gray-400 text-sm">
              ATS, CRM, Excel, email, and calling — everything is scattered across different platforms.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Missed Follow-Ups
            </h3>
            <p className="text-gray-400 text-sm">
              Manual tracking leads to missed calls, emails, and lost candidate opportunities.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">
              No Pipeline Visibility
            </h3>
            <p className="text-gray-400 text-sm">
              You don’t know exactly where candidates are stuck in the hiring process.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Excel & Manual Chaos
            </h3>
            <p className="text-gray-400 text-sm">
              Managing candidates in spreadsheets becomes messy and unscalable as you grow.
            </p>
          </div>

        </div>

      </section>
    </Reveal>
  )
}