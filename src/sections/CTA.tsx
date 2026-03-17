import Reveal from "../components/common/Reveal"
export default function CTA() {
  return (

    <Reveal>
        <section className="mt-28 px-6 max-w-5xl mx-auto text-center">

        {/* CTA BOX */}
        <div className="p-12 rounded-2xl bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 backdrop-blur">

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl font-bold">
            Ready to transform your recruitment workflow?
            </h2>

            {/* SUBTEXT */}
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Join modern recruitment agencies using Recruiters Orbit to streamline
            their pipeline and close placements faster.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-3 rounded-xl font-medium shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-200">
                Start Free Trial
            </button>

            <button className="border border-white/20 px-8 py-3 rounded-lg hover:bg-white/5 transition">
                Book Demo
            </button>

            </div>

        </div>

        </section>
    </Reveal>
  )
}