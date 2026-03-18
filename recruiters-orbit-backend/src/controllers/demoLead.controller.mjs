import DemoLead from "../models/DemoLead.mjs"

/* ================= CREATE DEMO LEAD ================= */
export const createDemoLead = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      teamSize,
      hiringVolume,
      message,
    } = req.body

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Email, Phone are required",
      })
    }

    const lead = await DemoLead.create({
      name,
      email,
      phone,
      company,
      teamSize,
      hiringVolume,
      message,
    })

    res.status(201).json({
      success: true,
      data: lead,
    })
  } catch (error) {
    next(error)
  }
}

/* ================= GET ALL DEMO LEADS ================= */
export const getDemoLeads = async (req, res, next) => {
  try {
    const leads = await DemoLead.find().sort({ createdAt: -1 })

    res.json({
      success: true,
      count: leads.length,
      data: leads,
    })
  } catch (error) {
    next(error)
  }
}