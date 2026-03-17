import Reveal from "../components/common/Reveal"
export default function Features() {
  return (
    <Reveal>
        <section className="mt-28 px-6 max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
            Everything you need to run <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                a modern recruitment agency
            </span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed to streamline your workflow, improve productivity,
            and maximize placements.
            </p>
        </div>

        {/* FEATURE BLOCKS */}
        <div className="mt-16 space-y-20">

            {/* FEATURE 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
                <h3 className="text-2xl font-semibold mb-4">Unified ATS + CRM</h3>
                <p className="text-gray-400">
                Manage candidates, clients, and deals in a single platform.
                No more switching between tools or losing track of opportunities.
                </p>
            </div>

            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
                UI Preview
                </div>

            </div>

            {/* FEATURE 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 order-2 md:order-1">
                UI Preview
            </div>

            <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4">Automation Engine</h3>
                <p className="text-gray-400">
                Automate repetitive tasks like follow-ups, reminders, and status updates
                so your team can focus on closing placements.
                </p>
            </div>

            </div>

            {/* FEATURE 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
                <p className="text-gray-400">
                Track performance, pipeline health, and recruiter productivity with
                real-time insights and actionable data.
                </p>
            </div>

            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
                UI Preview
                </div>

            </div>

        </div>

        </section>
    </Reveal>
  )
}