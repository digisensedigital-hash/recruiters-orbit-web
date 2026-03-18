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

    message: {
      type: String,
      default: "",
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