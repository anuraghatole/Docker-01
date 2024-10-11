import express from "express";
import { userLogin, userRegistration } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/register").post(userRegistration);
router.route("/login").post(userLogin);

export default router;
