import app from "./app.mjs"
import dotenv from "dotenv"
import connectDB from "./config/db.mjs"

dotenv.config()

const PORT = process.env.PORT || 5001

await connectDB()

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})