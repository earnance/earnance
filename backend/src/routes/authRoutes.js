import express from "express"
import { emailVerificationCheck, getAllUser, login, logout, signup } from "../controllers/authController.js"

const authRoutes = express.Router()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)
authRoutes.post('/emailCheck' , emailVerificationCheck)
authRoutes.get('/logout', logout)
authRoutes.get('/',getAllUser)



export default authRoutes