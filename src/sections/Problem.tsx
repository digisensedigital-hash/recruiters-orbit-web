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
            Most recruitment agencies are stuck juggling spreadsheets, disconnected tools,
            and manual follow-ups — slowing down placements and losing revenue.
        </p>

        {/* PROBLEM GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">Scattered Workflows</h3>
            <p className="text-gray-400 text-sm">
                Candidates, clients, and deals are managed across different tools with no visibility.
            </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">Lost Opportunities</h3>
            <p className="text-gray-400 text-sm">
                Missed follow-ups and poor tracking lead to lost placements and revenue.
            </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">No Pipeline Clarity</h3>
            <p className="text-gray-400 text-sm">
                Lack of a clear pipeline makes it difficult to track progress and performance.
            </p>
            </div>

            {/* CARD 4 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-6px] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h3 className="text-lg font-semibold mb-2 text-white">Manual & Time-Consuming</h3>
            <p className="text-gray-400 text-sm">
                Repetitive tasks and manual processes slow down your entire recruitment cycle.
            </p>
            </div>

        </div>

        </section>
    </Reveal>
  )
}