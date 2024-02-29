import ordersRoute from "./orders.route.js";

const routes = (express) => {
  express.use("/orders", ordersRoute);
};

export default routes;
