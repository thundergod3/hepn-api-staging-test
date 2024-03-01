import { Router } from "express";
import asyncHandler from "express-async-handler";

import { updateOrderStatus } from "../apps/controllers/order-status.controller.js";
import { authenticateKey } from "../middlewares/authentication.js";

const ordersRoute = Router();

// [POST]
ordersRoute.post(
  "/update-status",
  authenticateKey,
  asyncHandler(updateOrderStatus)
);

export default ordersRoute;
