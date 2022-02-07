import { Router } from "express";
import { firstController } from "../controllers/question.controller.js";
const question = Router();

question.get("/", firstController);


export default question;