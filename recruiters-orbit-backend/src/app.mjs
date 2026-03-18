import express from "express"
import cors from "cors"
import demoLeadRoutes from "./routes/demoLead.routes.mjs"

const app = express()

app.use(cors())
app.use(express.json())

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Recruiters Orbit Backend Running")
})

// Demo Lead API
app.use("/api/demo-leads", demoLeadRoutes)

// 404 handler (ALWAYS LAST)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

export default app