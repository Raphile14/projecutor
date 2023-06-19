import express from "express";
import apiRoutes from "./application/route/index";
import responseMiddleware from "./application/middleware/ResponseMiddleware";
import { dbInstance } from "./infra/database";

const app = express();
const port = 3000;

// Database
dbInstance.getDB();

// Middlewares
app.use(express.json());
app.use(responseMiddleware);

// Import Routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
