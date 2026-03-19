import Reveal from "../components/common/Reveal"

export default function Features() {
  return (
    <Reveal>
      <section id="features" className="mt-28 px-6 max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything you need to run <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              a modern recruitment agency
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            From job creation to candidate outreach and hiring — manage everything in one system.
          </p>
        </div>

        {/* FEATURE BLOCKS */}
        <div className="mt-16 space-y-20">

          {/* FEATURE 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Job-Based Recruitment System
              </h3>
              <p className="text-gray-400">
                Manage hiring through structured job openings with a complete pipeline —
                from sourced to hired — for every role.
              </p>
            </div>

            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
              Job Pipeline UI
            </div>

          </div>

          {/* FEATURE 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 order-2 md:order-1">
              Candidate Management UI
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">
                Smart Candidate Management
              </h3>
              <p className="text-gray-400">
                View complete candidate profiles with skills, salary, experience,
                and AI-based priority scoring to identify top candidates instantly.
              </p>
            </div>

          </div>

          {/* FEATURE 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Built-in Calling & Outreach
              </h3>
              <p className="text-gray-400">
                Call candidates directly, automate outreach with auto-dialing,
                and manage communication without leaving the platform.
              </p>
            </div>

            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
              Calling System UI
            </div>

          </div>

          {/* FEATURE 4 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 order-2 md:order-1">
              Email Automation UI
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">
                Email Automation & Templates
              </h3>
              <p className="text-gray-400">
                Send interview invites, follow-ups, and updates using dynamic templates
                with fields like job role, company, and location.
              </p>
            </div>

          </div>

          {/* FEATURE 5 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Bulk Resume & Data Import
              </h3>
              <p className="text-gray-400">
                Upload resumes or Excel sheets and add hundreds of candidates instantly
                without manual effort.
              </p>
            </div>

            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
              Bulk Upload UI
            </div>

          </div>

          {/* FEATURE 6 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 order-2 md:order-1">
              Analytics Dashboard UI
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">
                Recruitment Analytics & Insights
              </h3>
              <p className="text-gray-400">
                Track sourcing, screening, interviews, and hiring performance
                with real-time funnel analytics.
              </p>
            </div>

          </div>

        </div>

      </section>
    </Reveal>
  )
}