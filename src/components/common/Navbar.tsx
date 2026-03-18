import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`w-full px-6 md:px-8 transition-all duration-300 sticky top-0 z-50
      ${
        scrolled
          ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "py-5 bg-white/5 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link to="/">
          <h1 className="text-lg md:text-xl font-semibold tracking-tight text-white">
            Recruiters <span className="text-purple-400">Orbit</span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">
            Product
          </a>
          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-sm text-gray-400 hover:text-white transition">
              Login
            </button>

            <Link to="/book-demo">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-2.5 rounded-xl text-sm font-medium shadow-[0_8px_25px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 transition-all">
                Book Demo
              </button>
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-6"
          >
            <span
              className={`absolute w-full h-[2px] bg-white transition-all ${
                open ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute w-full h-[2px] bg-white transition-all ${
                open ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`absolute w-full h-[2px] bg-white transition-all ${
                open ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-full w-full bg-[#050510] border-b border-white/10 z-50 px-6 py-6 flex flex-col gap-5 text-gray-300"
            >
              <a href="#" onClick={() => setOpen(false)}>
                Product
              </a>
              <a href="#" onClick={() => setOpen(false)}>
                Pricing
              </a>
              <a href="#" onClick={() => setOpen(false)}>
                Contact
              </a>

              <div className="flex flex-col gap-3 mt-4">
                <button className="text-left">Login</button>

                <Link
                  to="/book-demo"
                  onClick={() => setOpen(false)}
                >
                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-2.5 rounded-lg">
                    Book Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}