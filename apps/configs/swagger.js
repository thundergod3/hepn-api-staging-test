import swaggerAutogen from "swagger-autogen";

import packageFile from "../../package.json" assert { type: "json" };

const { version } = packageFile;

const options = {
  openapi: "3.0.0",
};

const doc = {
  info: {
    title: "HEPN ORDER MANAGEMENT API",
    version,
    description: "HEPN ORDER MANAGEMENT API",
  },
  host: `localhost:${process.env.PORT || 1234}`,
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  definitions: {
    OrderStatus: {},
    UpdateOrderStatus: {
      brand: "string",
      storeName: "string",
      orderStatus: "string",
      posSaleNo: "string",
    },
    ErrorResponse: {
      msg: "string",
      stack: "string",
    },
  },
};
const outputFile = "../../swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(options)(outputFile, endpointsFiles, doc);
