import express from "express";
import { getFeaturedJobs, applyJob } from "../controllers/jobController";

const router = express.Router();

router.get("/featured", getFeaturedJobs);
router.post("/apply", applyJob);

export default router;
