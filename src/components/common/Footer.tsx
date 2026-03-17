export default function Footer() {
  return (
    <footer className="mt-20 px-6 py-10 border-t border-white/10 text-center text-sm text-gray-400">
      
      <div className="mb-4 font-semibold text-white">
        Recruiters Orbit
      </div>

      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-white">Product</a>
        <a href="#" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>

      <p>© {new Date().getFullYear()} Recruiters Orbit. All rights reserved.</p>

    </footer>
  )
}