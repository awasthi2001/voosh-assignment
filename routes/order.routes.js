import { Router } from "express";
import {
  handler_Get_Order,
  handle_AddOrder,
} from "../Controllers/order.controller.js";

export const OrderRouter = Router();

OrderRouter.post("/add-order", handle_AddOrder);

OrderRouter.get("/get-order", handler_Get_Order);
