import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import routes from "./routes/index.js";
import { notFound, handleError } from "./middlewares/handlerError.js";
import logger from "./apps/configs/logger.js";

import swaggerFile from "./swagger-output.json" assert { type: "json" };

const app = express();

// Middlewares
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/api", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Handler Error
app.use(notFound);
app.use(handleError);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  logger.info(
    `Server running in http://localhost:${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
