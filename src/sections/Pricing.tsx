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

          
        {/* LEFT — HIGH-CONVERSION PRICING CARD */}
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
            + GST • No hidden charges.
            </p>

            {/* ROI */}
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 mb-5">
            ⚡ Save hours/day per recruiter.
            </div>

            {/* FEATURES */}
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
            <li>✔ Job-based recruitment system.</li>
            <li>✔ AI candidate scoring.</li>
            <li>✔ Built-in calling & outreach.</li>
            <li>✔ Email automation & templates.</li>
            <li>✔ Bulk resume & Excel import.</li>
            <li>✔ Recruitment analytics dashboard.</li>
            </ul>

            {/* VALUE STACK */}
            <div className="space-y-2 text-xs text-gray-400 mb-6">
            <p>✔ Replace Excel + ATS + CRM + Email + Calling.</p>
            <p>✔ Faster hiring with structured workflows.</p>
            <p>✔ No setup complexity.</p>
            </div>

        </div>

        {/* CTA BLOCK */}
        <div className="mt-6">

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

        {/* RIGHT — PREMIUM COMPARISON PANEL */}
        <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-3 px-6 py-4 border-b border-white/10 text-xs uppercase tracking-wide text-gray-500 font-medium">
            <span>Feature</span>
            <span className="text-center text-green-400 font-small">Recruiters Orbit</span>
            <span className="text-center text-red-400 font-small">Others</span>
        </div>

        {/* ROWS */}
        <div className="divide-y divide-white/10">

        
        {[
        ["Job Management", "Structured job system.", "No job-centric flow."],
        ["Hiring Workflow", "Stage-wise pipeline.", "No structured workflow."],
        ["Candidate Management", "AI + rich profiles.", "Basic storage."],
        ["Calling System", "Built-in + auto dial.", "External tools."],
        ["Bulk Actions", "Update / assign in bulk.", "Manual work."],
        ["Email System", "Templates + bulk send.", "Manual emails."],
        ["Data Import", "Excel + resume upload.", "Manual entry."],
        ["Insights", "Live funnel analytics.", "No visibility."],
        ].map((row, i) => (
        <div
            key={i}
            className="grid grid-cols-3 items-center px-6 py-5 hover:bg-white/5 transition"
        >
            {/* FEATURE */}
            <div className="text-gray-300 font-small text-sm">
            {row[0]}
            </div>

            {/* ORBIT */}
            <div className="flex items-center justify-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span className="text-green-300 font-medium text-sm">
                {row[1]}
            </span>
            </div>

            {/* OTHERS */}
            <div className="flex items-center justify-center gap-2">
            <span className="text-red-400 text-lg">✕</span>
            <span className="text-red-300 text-sm opacity-80">
                {row[2]}
            </span>
            </div>
        </div>
        ))}

        </div>

        </div>

        </div>

      </section>
    </Reveal>
  )
}