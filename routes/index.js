import { Router } from "express";

import ordersRoute from "./orders.route.js";

const routes = Router();

routes.use("/v1/orders", ordersRoute);

export default routes;
