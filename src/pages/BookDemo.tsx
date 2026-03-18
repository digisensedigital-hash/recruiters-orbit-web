import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function BookDemo() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    hiringVolume: "",
    currentHiringMethod: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all required fields")
      return
    }
    setError("")
    setStep(2)
  }

  const handleBack = () => setStep(1)

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [success, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("http://localhost:5001/api/demo-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          hiringVolume: "",
          currentHiringMethod: "",
        })
        setStep(1)
      } else {
        setError(data.message || "Something went wrong")
      }
    } catch {
      setError("Server error. Please try again.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md">

        {/* SUCCESS STATE */}
        {success ? (
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800 text-center space-y-4">
            <h2 className="text-2xl font-bold">🎉 You're Booked!</h2>

            <p className="text-zinc-400 text-sm">
              Thank you for booking a demo with Recruiters Orbit.
            </p>

            <p className="text-zinc-500 text-sm">
              Our team will contact you shortly for a quick walkthrough.
            </p>

            <p className="text-xs text-zinc-600">
              Redirecting to homepage in a few seconds...
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-3 w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Go to Home
            </button>
          </div>
        ) : (

          /* FORM */
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-8 rounded-2xl shadow-xl space-y-5 border border-zinc-800"
          >
            {/* HEADER */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold">Book a Demo 🚀</h2>
              <p className="text-sm text-zinc-400">
                See how Recruiters Orbit helps you close more placements
              </p>
              <p className="text-xs text-zinc-500">
                Step {step} of 2
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded text-sm">
                ❌ {error}
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-white"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Work Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-white"
                  required
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-white"
                  required
                />

                <input
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-white"
                />

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Continue →
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="w-full text-sm text-zinc-400 hover:text-white mt-2"
                >
                  Cancel
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <select
                  name="hiringVolume"
                  value={form.hiringVolume}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 rounded-lg outline-none"
                  required
                >
                  <option value="">Hiring Volume</option>
                  <option value="1-5">1–5 hires/month</option>
                  <option value="5-20">5–20 hires/month</option>
                  <option value="20+">20+ hires/month</option>
                </select>

                <select
                  name="currentHiringMethod"
                  value={form.currentHiringMethod}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-800 rounded-lg outline-none"
                  required
                >
                  <option value="">Current Hiring Method</option>
                  <option value="excel">Excel / Sheets</option>
                  <option value="ats">ATS</option>
                  <option value="crm">CRM</option>
                  <option value="manual">Manual / WhatsApp</option>
                </select>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full border border-white/20 py-3 rounded-lg hover:bg-white/5 transition"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Book Demo 🚀"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="w-full text-sm text-zinc-400 hover:text-white mt-2"
                >
                  Cancel
                </button>
              </>
            )}

            {/* TRUST LINE */}
            <p className="text-xs text-center text-zinc-500">
              ✔ No spam • ✔ 15-min demo • ✔ Cancel anytime
            </p>
          </form>
        )}
      </div>
    </div>
  )
}