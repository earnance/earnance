import mongoose from "mongoose";

const taskProviderSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    ProfilePic: {
      type: String,
    },
    Username: {
      type: String,
      unique: true,
    },
    Address: {
      type: String,
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
    EmailVerificationCode: String,
    PhoneVerificationCode: String,
  },
  {
    timestamps: true,
  }
);

const TaskProvider = mongoose.model("TaskProvider", taskProviderSchema);

export default TaskProvider;
