import { Router } from "express";
import {
  Login_handler,
  Register_handler,
} from "../Controllers/user.controller.js";
export const userRouter = Router();

userRouter.post("/add-user", Register_handler);

userRouter.post("/login-user", Login_handler);
