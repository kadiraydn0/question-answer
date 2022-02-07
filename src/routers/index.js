import { Router } from "express";
import question from "./question.js";
import auth from "./auth.js";
const router = Router();


router.use("/question", question);
router.use("/auth", auth);

export default router;