import Reveal from "../components/common/Reveal"
export default function HowItWorks() {
  return (
    <Reveal>
    <section className="mt-28 px-6 max-w-6xl mx-auto text-center">

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl font-bold">
        How it works
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Get started in minutes and streamline your entire recruitment workflow.
      </p>

      {/* STEPS */}
      <div className="mt-14 grid md:grid-cols-3 gap-8">

        {/* STEP 1 */}
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <div className="text-2xl font-bold mb-3 text-purple-400">01</div>
          <h3 className="text-lg font-semibold mb-2">Capture Leads & Jobs</h3>
          <p className="text-gray-400 text-sm">
            Add clients, job requirements, and leads into your pipeline.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <div className="text-2xl font-bold mb-3 text-purple-400">02</div>
          <h3 className="text-lg font-semibold mb-2">Manage Candidates</h3>
          <p className="text-gray-400 text-sm">
            Track candidates through stages and manage the hiring process visually.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <div className="text-2xl font-bold mb-3 text-purple-400">03</div>
          <h3 className="text-lg font-semibold mb-2">Close Placements</h3>
          <p className="text-gray-400 text-sm">
            Convert deals faster with better tracking, automation, and insights.
          </p>
        </div>

      </div>

    </section>
    </Reveal>
  )
}