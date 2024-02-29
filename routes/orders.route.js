import { Router } from "express";
import asyncHandler from "express-async-handler";

import { updateOrderStatus } from "../apps/controllers/order-status.controller.js";

const ordersRoute = Router();

// [POST]
ordersRoute.post("/update-status", asyncHandler(updateOrderStatus));

export default ordersRoute;
