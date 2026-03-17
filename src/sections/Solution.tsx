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
            Recruiters Orbit brings your entire recruitment workflow into one unified system —
            from client acquisition to candidate placement.
        </p>

        {/* FEATURES GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

            {/* ITEM 1 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">Unified Pipeline</h3>
            <p className="text-gray-400 text-sm">
                Manage candidates and deals in one visual pipeline with complete clarity.
            </p>
            </div>

            {/* ITEM 2 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">Smart Automation</h3>
            <p className="text-gray-400 text-sm">
                Automate follow-ups, reminders, and workflows to save time and increase efficiency.
            </p>
            </div>

            {/* ITEM 3 */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">Real-time Insights</h3>
            <p className="text-gray-400 text-sm">
                Get actionable insights into performance, pipeline, and recruiter productivity.
            </p>
            </div>

        </div>

        </section>
    </Reveal>
  )
}