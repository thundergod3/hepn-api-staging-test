import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index.js";
import { notFound, handleError } from "./middlewares/handlerError.js";
import logger from "./apps/configs/logger.js";

const app = express();

// Middlewares
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
routes(app);

// Handler Error
app.use(notFound);
app.use(handleError);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  logger.info(
    `Server running in http://localhost:${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
