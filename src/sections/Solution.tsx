import Reveal from "../components/common/Reveal"

export default function Solution() {
  return (
    <Reveal>
      <section className="mt-28 px-6 max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          One Platform. <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Total Control.
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Recruiters Orbit replaces Excel, ATS, CRM, email, and calling tools with one unified system built for recruitment teams.
        </p>

        {/* FEATURES GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {/* ITEM 1 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-green-400">
              All-in-One Recruitment System
            </h3>
            <p className="text-gray-400 text-sm">
              Manage jobs, candidates, clients, communication, and outreach — all in one place.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-green-400">
              Structured Hiring Workflow
            </h3>
            <p className="text-gray-400 text-sm">
              Follow a clear process from job creation to hiring with full pipeline visibility.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-green-400">
              Faster Execution & Closures
            </h3>
            <p className="text-gray-400 text-sm">
              Call, email, assign, and update candidates faster with automation and bulk actions.
            </p>
          </div>

        </div>

        {/* STRONG POSITIONING LINE */}
        <div className="mt-12 text-lg text-gray-300">
          Replace 5 tools with 1 system — and close positions faster.
        </div>

      </section>
    </Reveal>
  )
}