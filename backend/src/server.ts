import express from "express";
import apiRoutes from "./application/route/index";
import responseMiddleware from "./application/middleware/ResponseMiddleware";

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(responseMiddleware);

// Import Routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
