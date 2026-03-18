import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BookDemo() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
        })
      } else {
        setError(data.message || "Something went wrong")
      }
    } catch (err) {
      setError("Server error. Please try again.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 rounded-2xl shadow-xl space-y-5 border border-zinc-800"
        >
          <h2 className="text-2xl font-bold text-center">
            Book a Demo 🚀
          </h2>

          <p className="text-sm text-zinc-400 text-center">
            See how Recruiters Orbit helps you close more placements
          </p>

          {success && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded text-sm">
              ✅ Demo request submitted successfully!
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded text-sm">
              ❌ {error}
            </div>
          )}

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

          {/* ACTION BUTTONS */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Book Demo"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full border border-white/20 py-3 rounded-lg hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}