import mongoose from "mongoose";

const RosterSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  subjectsEnrolled: [{ type: String, required: true }],
  studentPhoto: { type: String, required: true },
  absences: { type: Number, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const RosterModel = mongoose.model("rosters", RosterSchema);
