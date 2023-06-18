import express from "express";
import apiRoutes from "./application/route/index";

const app = express();
const port = 3000;

// Import Routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
