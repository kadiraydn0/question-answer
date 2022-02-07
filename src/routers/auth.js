import { Router } from "express";
import { firstController } from "../controllers/auth.controller.js";
const auth = Router();

auth.get("/", firstController);

export default auth;