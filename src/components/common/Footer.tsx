import { Mail, Phone, Linkedin, Twitter, Facebook, InstagramIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-4">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* COLUMN 1 — BRAND */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Recruiters Orbit
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              A complete Recruitment Operating System built for agencies,
              staffing firms, and hiring teams. Replace ATS, CRM, Excel,
              calling tools, and email automation with one unified platform.
            </p>

            <div className="mt-4 text-sm text-gray-500">
              © {new Date().getFullYear()} Recruiters Orbit
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#demo" className="hover:text-white transition">Book Demo</a></li>
            </ul>
          </div>

          {/* COLUMN 3 — PRODUCT */}
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Recruitment Pipeline</li>
              <li>AI Candidate Scoring</li>
              <li>Auto Dial Calling</li>
              <li>Email Automation</li>
              <li>Bulk Resume Import</li>
              <li>Analytics Dashboard</li>
            </ul>
          </div>

          {/* COLUMN 4 — RESOURCES */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/blogs/recruitment-automation" className="hover:text-white transition">Recruitment Automation Guide</a></li>
              <li><a href="/blogs/ats-vs-crm" className="hover:text-white transition">ATS vs CRM</a></li>
              <li><a href="/blogs/hiring-funnel" className="hover:text-white transition">Hiring Funnel Optimization</a></li>
              <li><a href="/blogs/agency-growth" className="hover:text-white transition">Scale Your Agency</a></li>
            </ul>
          </div>

          {/* COLUMN 5 — CONTACT */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@recruitersorbit.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4">
  
              <a 
                href="https://linkedin.com/company/recruitersorbit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>

              <a 
                href="https://twitter.com/recruitersorbit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 hover:scale-110 transition-all duration-200"
              >
                <Twitter size={18} />
              </a>

              <a 
                href="https://instagram.com/recruitersorbit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 hover:scale-110 transition-all duration-200"
              >
                <InstagramIcon size={18} />
              </a>

              <a 
                href="https://facebook.com/recruitersorbit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:scale-110 transition-all duration-200"
              >
                <Facebook size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-8 pt-3 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          
          <div>
            Built for modern recruitment teams 🚀
          </div>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer