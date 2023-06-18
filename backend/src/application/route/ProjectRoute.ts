import express from "express";
import { getProjects } from "../rest/ProjectController";
const router = express.Router();

// Controllers
router.get("/", getProjects);

export default router;
