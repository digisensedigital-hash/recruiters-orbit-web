import Reveal from "../components/common/Reveal"
import { Link } from "react-router-dom"

export default function Pricing() {
  return (
    <Reveal>
      <section id="pricing" className="mt-32 px-6 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple Pricing. Massive Value.
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Replace spreadsheets and scattered tools with one powerful system.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* LEFT — PRICING */}
          <div className="flex flex-col justify-between h-full p-10 rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-500/10 to-cyan-500/10 shadow-[0_0_80px_rgba(139,92,246,0.25)]">

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Recruiters Orbit
              </h3>

              <div className="text-5xl font-bold mb-2">
                ₹1100
                <span className="text-lg font-normal text-gray-400">
                  /user/month
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-6">
                + GST applicable • No hidden charges
              </p>

              {/* ROI BOX */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 text-sm text-gray-300">
                💡 Save 10+ hours/week per recruiter
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ Lead → Deal → Client lifecycle</li>
                <li>✔ Visual pipeline management</li>
                <li>✔ Smart follow-up reminders</li>
                <li>✔ Team collaboration</li>
                <li>✔ Analytics dashboard</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link to="/book-demo">
                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl font-medium hover:scale-105 active:scale-95 transition-all">
                  Book a Demo 🚀
                </button>
              </Link>

              <p className="text-xs text-gray-500 mt-4 text-center">
                No hidden charges • Cancel anytime
              </p>
            </div>
          </div>

        {/* RIGHT — CLEAN COMPARISON PANEL */}
        <div className="h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-3 px-6 py-4 border-b border-white/10 text-sm font-medium text-gray-400">
            <span>Feature</span>
            <span className="text-center text-green-400">Recruiters Orbit</span>
            <span className="text-center text-red-400">Others</span>
        </div>

        {/* ROWS */}
        <div className="divide-y divide-white/10">

            {[
            ["Recruitment CRM", "Built for recruiters", "Generic CRM"],
            ["Pipeline visibility", "Visual tracking", "Manual tracking"],
            ["Follow-ups", "Automated reminders", "Missed tasks"],
            ["Team collaboration", "Centralized system", "Scattered tools"],
            ["Analytics", "Real-time insights", "No clarity"],
            ["Excel dependency", "Not needed", "Required"],
            ].map((row, i) => (
            <div
                key={i}
                className="grid grid-cols-3 items-center px-6 py-5 text-sm"
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