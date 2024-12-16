import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getFeaturedJobs = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const jobs = await prisma.job.findMany({
      where: {
        featured: true,
        ...(category && { category: { name: category.toString() } }),
      },
      include: { category: true },
    });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch featured jobs." });
  }
};

export const applyJob = (req: Request, res: Response) => {
  res.status(200).json({ message: "Application successful (mocked)." });
};
