import mongoose from "mongoose";

const taskSeekerSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    ProfilePic: {
      type: String,
    },
    Username: {
      type: String,
      unique: true,
    },
    Date: {
      type: Date,
    },
    Gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    Email: {
      type: String,
      require: true,
    },
    isEmailVerfiy: {
      type: Boolean,
    },
    Phone: {
      type: Number,
      require: true,
    },
    isPhoneVerify: {
      type: Boolean,
    },
    Password: {
      type: String,
      require: true,
    },
    Address: {
      type: String,
    },
    CollegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
    },
    Skills: [
      {
        type: String,
        enum: [
          "Development",
          "Photography",
          "Videography",
          "Editing",
          "Gaming",
          "Dancing",
          "Singing",
          "Designing",
          "Driver",
        ],
      },
    ],
    isCollegeIdVerify: {
      type: Boolean,
    },
    EmailVerificationCode: {
      type: String,
    },
    PhoneVerificationCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const TaskSeeker = mongoose.model("TaskSeeker", taskSeekerSchema);

export default TaskSeeker;
