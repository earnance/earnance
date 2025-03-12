import express from "express";
import {
  checkAuth,
  emailVerificationCheck,
  login,
  logout,
  signup,
} from "../controllers/authController.js";
import { protectedRoute } from "../middlewares/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/emailCheck", emailVerificationCheck);
authRoutes.get("/logout", logout);
authRoutes.get("/check", protectedRoute, checkAuth);

export default authRoutes;
