import { Routes, Route } from "react-router-dom"
import BookDemo from "./pages/BookDemo"

import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Hero from "./sections/Hero"
import TrustStrip from "./sections/TrustStrip"
import Problem from "./sections/Problem"
import Solution from "./sections/Solution"
import Features from "./sections/Features"
import HowItWorks from "./sections/HowItWorks"
import Pricing from "./sections/Pricing"
import CTA from "./sections/CTA"
import CursorGlow from "./components/common/CursorGlow"
import Particles from "./components/common/Particles"

// ✅ LANDING PAGE
function Landing() {
  return (
    <div className="min-h-screen bg-[#050510] text-white relative overflow-x-hidden">

      {/* GLOBAL DEPTH */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      {/* BACKGROUND EFFECTS */}
      <CursorGlow />

      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ✅ FIX: PARTICLES ISOLATED (CRITICAL) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles />
      </div>

      {/* ✅ FIXED NAVBAR */}
      <Navbar />

      {/* ✅ CONTENT OFFSET */}
      <div className="pt-20">

        {/* HERO FLOW */}
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />

        {/* 🔥 SCROLL TARGETS */}
        <section id="features">
          <Features />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        {/* CTA + FOOTER */}
        <CTA />
        <Footer />
      </div>

    </div>
  )
}

// ✅ ROUTING
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/book-demo" element={<BookDemo />} />
    </Routes>
  )
}