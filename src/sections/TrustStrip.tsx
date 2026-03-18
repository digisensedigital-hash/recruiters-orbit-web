export default function TrustStrip() {
  const items = [
    "🏢 Recruitment Agencies",
    "📊 Staffing Firms",
    "👥 HR Teams",
    "🎯 Talent Acquisition",
    "🔍 Executive Search",
    "💼 Freelance Recruiters"
  ]

  return (
    <section className="mt-20 px-6 text-center overflow-hidden">

      {/* TEXT */}
      <p className="text-sm text-gray-500 mb-2">
        Built for modern recruitment teams
      </p>

      <p className="text-xs text-gray-600 mb-6">
        Designed for agencies, staffing firms & hiring teams worldwide
      </p>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden border-y border-white/10 py-4">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">

          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-gray-400 font-medium tracking-wide hover:text-white transition"
            >
              {item}
            </span>
          ))}

        </div>
      </div>

    </section>
  )
}