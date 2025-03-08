import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Address: {
      type: String,
    },
    Course: {
      type: String,
    },
    CollegeId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const College = mongoose.model("College", collegeSchema);

export default College;
