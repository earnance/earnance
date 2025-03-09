import express from "express"
import { login, logout, signup } from "../controllers/authController.js"

const authRoutes = express.Router()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)
authRoutes.get('/logout', logout)



export default authRoutes