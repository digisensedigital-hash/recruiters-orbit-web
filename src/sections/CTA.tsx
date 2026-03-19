import Reveal from "../components/common/Reveal"
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <Reveal>
      <section className="mt-28 px-6 max-w-5xl mx-auto text-center">

        {/* CTA BOX */}
        <div className="p-12 rounded-2xl bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 backdrop-blur">

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Stop juggling tools. <br />
            Start closing more placements.
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            See how Recruiters Orbit helps you manage jobs, candidates, and hiring workflows in one system.
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <Link to="/book-demo">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-xl font-medium text-lg shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-200">
                Book a Demo 🚀
              </button>
            </Link>
          </div>

          {/* TRUST LINE */}
          <p className="mt-4 text-sm text-gray-500">
            Takes less than 2 minutes • No commitment required
          </p>

        </div>

      </section>
    </Reveal>
  )
}
