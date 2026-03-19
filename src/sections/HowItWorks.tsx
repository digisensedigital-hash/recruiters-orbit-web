import Reveal from "../components/common/Reveal"

export default function HowItWorks() {
  return (
    <Reveal>
      <section id="how-it-works" className="mt-28 px-6 max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold">
          How it works
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Manage your entire recruitment process in a simple, structured workflow.
        </p>

        {/* STEPS */}
        <div className="mt-14 grid md:grid-cols-5 gap-6">

          {/* STEP 1 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-purple-500/40 transition">
            <div className="text-2xl font-bold mb-3 text-purple-400">01</div>
            <h3 className="text-lg font-semibold mb-2">Create Job</h3>
            <p className="text-gray-400 text-sm">
              Add job openings and define hiring requirements in seconds.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-purple-500/40 transition">
            <div className="text-2xl font-bold mb-3 text-purple-400">02</div>
            <h3 className="text-lg font-semibold mb-2">Add Candidates</h3>
            <p className="text-gray-400 text-sm">
              Upload resumes, import Excel sheets, or source candidates easily.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-purple-500/40 transition">
            <div className="text-2xl font-bold mb-3 text-purple-400">03</div>
            <h3 className="text-lg font-semibold mb-2">Screen & Prioritize</h3>
            <p className="text-gray-400 text-sm">
              Use AI scoring and filters to identify top candidates instantly.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-purple-500/40 transition">
            <div className="text-2xl font-bold mb-3 text-purple-400">04</div>
            <h3 className="text-lg font-semibold mb-2">Take Actions</h3>
            <p className="text-gray-400 text-sm">
              Call, email, assign, or update candidates — all from one place.
            </p>
          </div>

          {/* STEP 5 */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-purple-500/40 transition">
            <div className="text-2xl font-bold mb-3 text-purple-400">05</div>
            <h3 className="text-lg font-semibold mb-2">Track & Close</h3>
            <p className="text-gray-400 text-sm">
              Move candidates through pipeline stages and close hiring faster.
            </p>
          </div>

        </div>

      </section>
    </Reveal>
  )
}
