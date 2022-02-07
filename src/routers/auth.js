import { Router } from "express";
import { createUserHandler } from "../controllers/auth.controller.js";
const auth = Router();


auth.post("/create", createUserHandler);

export default auth;