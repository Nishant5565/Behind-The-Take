import express from "express";
import { getFeaturedJobs, applyJob, addJob } from "../controllers/jobController";

const router = express.Router();

router.post("/featured", getFeaturedJobs);
router.post("/apply", applyJob);
router.post("/addjob", addJob);

export default router;
