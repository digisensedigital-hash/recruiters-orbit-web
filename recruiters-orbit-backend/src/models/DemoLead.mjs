import mongoose from "mongoose"

const demoLeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      default: "",
      trim: true,
    },

    teamSize: {
      type: String,
      default: "",
    },

    hiringVolume: {
      type: String,
      default: "",
    },

    currentHiringMethod: {
      type: String,
      enum: ["excel", "ats", "crm", "manual", ""],
      default: "",
    },

    timeline: {
      type: String,
      enum: ["immediate", "1_month", "exploring", ""],
      default: "",
    },

    message: {
      type: String,
      default: "",
    },

    // 🎯 SALES INTELLIGENCE
    score: {
      type: Number,
      default: 0,
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },

    // 🧑‍💼 OWNERSHIP
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // 📅 FOLLOW-UP SYSTEM
    lastContactedAt: {
      type: Date,
      default: null,
    },

    nextFollowUpAt: {
      type: Date,
      default: null,
    },

    // 🔗 CONVERSION PIPELINE
    convertedToClientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      default: null,
    },

    // 🌍 MARKETING TRACKING
    utm: {
      source: String,
      medium: String,
      campaign: String,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "scheduled", "completed", "converted"],
      default: "new",
    },

    source: {
      type: String,
      default: "website",
    },
  },
  { timestamps: true }
)

export default mongoose.model("DemoLead", demoLeadSchema)