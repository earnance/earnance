import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    profilePic: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    date: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    email: {
      type: String,
      require: true,
      unique : true,
    },
    isEmailVerfiy: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      require: true,
      unique : true,
    },
    isPhoneVerify: {
      type: Boolean,
      default : false,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
    },
    skills: [
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
    emailVerificationCode: {
      type: String,
    },
    phoneVerificationCode: {
      type: String,
    },
    role: {
      type: String,
      enum: ["taskSeeker", "taskProvider"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
