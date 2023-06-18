import express from "express";
import projectRoute from "./ProjectRoute";
const router = express.Router();

router.use("/project", projectRoute);

export default router;
