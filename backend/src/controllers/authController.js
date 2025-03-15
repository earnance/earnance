import { sendVerificationEmail, sendWelcomeEmail } from "../lib/email.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { name, phone, email, password, role } = req.body;

  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (!["taskSeeker", "taskProvider"].includes(role)) {
      return res
        .status(400)
        .json({ message: "Role should taskSeeker or taskProvider Only! " });
    }

    const user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ message: "User has been already registered." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const emailverificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const newUser = new User({
      name,
      email,
      role,
      phone,
      password: hashedPassword,
      emailVerificationCode: emailverificationCode,
    });

    await sendVerificationEmail(email, emailverificationCode);

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        emailVerificationCode: emailverificationCode,
        isEmailVerfiy: newUser.isEmailVerfiy,
      });
    } else {
      res.status(400).json({ message: "Invalid User data" });
    }
  } catch (error) {
    console.log("Error Signup Controller", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    console.log(user);

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out" });
  } catch (error) {
    console.log("Error in Logout Controller", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const emailVerificationCheck = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findOne({
      emailVerificationCode: code,
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid Code or Expired Code." });
    }
    user.isEmailVerfiy = true;
    user.emailVerificationCode = undefined;
    await user.save();
    sendWelcomeEmail(user.email);
    return res.status(200).json({ message: "User isVerified! " });
  } catch (error) {
    console.log("Error in checking email verifcation: ", error);
    res
      .status(500)
      .json({ message: "Error checking verification", error: error.message });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in check controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
