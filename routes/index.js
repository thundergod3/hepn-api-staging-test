import { Router } from "express";

import ordersRoute from "./orders.route.js";

const routes = Router();

routes.use("/api/orders", ordersRoute);

export default routes;
