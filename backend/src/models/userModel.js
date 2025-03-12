import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique : true,
    },
    role: {
      type: String,
      enum: ["taskSeeker", "taskProvider"],
      require: true,
    },
    phone: {
      type: String,
      require: true,
      unique : true,
    },
    password: {
      type: String,
      require: true,
    },
    emailVerificationCode: {
      type: String,
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
   
    isEmailVerfiy: {
      type: Boolean,
      default: false,
    },
    
    isPhoneVerify: {
      type: Boolean,
      default : false,
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
    
    phoneVerificationCode: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
