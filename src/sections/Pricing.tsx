import Reveal from "../components/common/Reveal"
export default function Pricing() {
  return (
    <Reveal>
        <section className="mt-28 px-6 max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold">
            Simple, transparent pricing
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your agency. No hidden fees.
        </p>

        {/* PRICING CARDS */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

            {/* STARTER */}
            <div className="p-8 border border-white/10 rounded-xl bg-white/5 transition-all duration-300 hover:translate-y-[-8px] hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">For small agencies</p>

            <div className="text-3xl font-bold mb-6">$19/mo</div>

            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li>Basic pipeline</li>
                <li>Candidate tracking</li>
                <li>Email support</li>
            </ul>

            <button className="w-full border border-white/20 py-2 rounded-lg hover:bg-white/5 transition">
                Get Started
            </button>
            </div>

            {/* GROWTH (Highlighted) */}
            <div className="p-8 border border-purple-500/50 rounded-xl bg-gradient-to-b from-purple-500/10 to-cyan-500/10 scale-105 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] relative">
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-purple-500 px-3 py-1 rounded-full">
                MOST POPULAR
                </div>

            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-gray-400 text-sm mb-6">For scaling teams</p>

            <div className="text-3xl font-bold mb-6">$49/mo</div>

            <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li>Advanced pipeline</li>
                <li>Automation workflows</li>
                <li>Analytics dashboard</li>
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-2 rounded-lg font-medium hover:scale-105 active:scale-95 transition-all duration-200">
                Start Free Trial
            </button>
            </div>

            {/* ENTERPRISE */}
            <div className="p-8 border border-white/10 rounded-xl bg-white/5 transition-all duration-300 hover:translate-y-[-8px] hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">For large firms</p>

            <div className="text-3xl font-bold mb-6">Custom</div>

            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li>Unlimited usage</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
            </ul>

            <button className="w-full border border-white/20 py-2 rounded-lg hover:bg-white/5 transition">
                Contact Sales
            </button>
            </div>

        </div>

        </section>
    </Reveal>
  )
}