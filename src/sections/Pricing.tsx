import Reveal from "../components/common/Reveal"
import { Link } from "react-router-dom"

export default function Pricing() {
  return (
    <Reveal>
      <section id="pricing" className="mt-32 px-6 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple Pricing. Massive Value.
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Replace 5 tools with one powerful recruitment system.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* LEFT — PRICING CARD */}
          <div className="flex flex-col justify-between h-full p-8 rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 shadow-[0_0_60px_rgba(139,92,246,0.2)]">

            <div>

              <h3 className="text-xl font-semibold mb-3">
                Recruiters Orbit
              </h3>

              {/* PRICE */}
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold">₹1100</span>
                <span className="text-sm text-gray-400 mb-1">
                  /user/month
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                + GST • No hidden charges
              </p>

              {/* VALUE BADGE */}
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 mb-6">
                ⚡ Save 10+ hours/week per recruiter
              </div>

              {/* FEATURES */}
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✔ Job-based recruitment system</li>
                <li>✔ Candidate pipeline & AI scoring</li>
                <li>✔ Built-in calling & auto dial</li>
                <li>✔ Email automation & templates</li>
                <li>✔ Bulk resume & Excel import</li>
                <li>✔ Recruitment analytics dashboard</li>
              </ul>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link to="/book-demo">
                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl font-medium hover:scale-105 active:scale-95 transition-all">
                  Book a Demo 🚀
                </button>
              </Link>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Takes 2 mins • No commitment
              </p>
            </div>

          </div>

          {/* RIGHT — COMPARISON PANEL */}
          <div className="h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">

            {/* HEADER */}
            <div className="grid grid-cols-3 px-6 py-4 border-b border-white/10 text-sm font-medium text-gray-400">
              <span>Feature</span>
              <span className="text-center text-green-400">Orbit</span>
              <span className="text-center text-red-400">Others</span>
            </div>

            {/* ROWS */}
            <div className="divide-y divide-white/10">

              {[
                [
                  "Hiring Workflow",
                  "Job-based pipeline (Sourced → Hired)",
                  "No structured workflow"
                ],
                [
                  "Candidate Management",
                  "Rich profiles + AI priority scoring",
                  "Basic contact storage"
                ],
                [
                  "Calling System",
                  "Built-in calling + auto dial",
                  "External tools required"
                ],
                [
                  "Bulk Operations",
                  "Update / assign / call in bulk",
                  "Manual one-by-one actions"
                ],
                [
                  "Email System",
                  "Templates + bulk email + variables",
                  "Manual emails"
                ],
                [
                  "Recruitment Insights",
                  "Live funnel analytics per job",
                  "No visibility"
                ],
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center px-6 py-5 text-sm hover:bg-white/5 transition"
                >
                  {/* FEATURE */}
                  <span className="text-gray-300">
                    {row[0]}
                  </span>

                  {/* ORBIT */}
                  <span className="text-green-400 text-center font-medium flex items-center justify-center gap-2">
                    ✓ <span>{row[1]}</span>
                  </span>

                  {/* OTHERS */}
                  <span className="text-red-400 text-center font-medium flex items-center justify-center gap-2">
                    ✕ <span>{row[2]}</span>
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  )
}