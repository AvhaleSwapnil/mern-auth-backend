import express from "express";
import { SignIn, SignUp } from "../controllers/authController.js";

const router = express.Router();
// http://localhost:3000/api/auth/sign-up
router.post("/signup", SignUp);
// http://localhost:3000/api/auth/sign-in
router.post("/signin", SignIn);
export default router;
