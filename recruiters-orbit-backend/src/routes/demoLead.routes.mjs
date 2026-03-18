import express from "express"
import {
  createDemoLead,
  getDemoLeads,
} from "../controllers/demoLead.controller.mjs"

const router = express.Router()

// Create demo lead
router.post("/", createDemoLead)

// Get all demo leads
router.get("/", getDemoLeads)

export default router