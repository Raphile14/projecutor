import express from "express";
import { getProjects, cloneRepository } from "../rest/ProjectController";
const router = express.Router();

// Controllers
router.get("/", getProjects);
router.post("/clone", cloneRepository);

export default router;
