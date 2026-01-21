import express from "express"
import { login } from "../controllers/auth/login.js"
import { signup } from "../controllers/auth/signup.js"
const router=express.Router()

router.post("/login", login)
router.post("/signup",signup)

export default router