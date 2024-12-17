import { Request, Response } from "express";
import prisma from "../prisma/client";
export const getFeaturedJobs = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    console.log(category);

    let jobs;
    if (category === 1) {
      jobs = await prisma.job.findMany({
        where: {
          featured: true,
        },
        include: { category: true },
      });
    } else {
      jobs = await prisma.job.findMany({
        where: {
          category: { id: category },
          featured: true,
        },
        include: { category: true },
      });
    }

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch featured jobs." });
  }
};

export const applyJob = (req: Request, res: Response) => {
  res.status(200).json({ message: "Application successful (mocked)." });
};


export const addJob = async (req: Request, res: Response) => {
  try {
    const { title, company, location, salary, featured, categoryId } = req.body;

    const newJob = await prisma.job.create({
      data: {
        title,
        company,
        location,
        salary,
        featured,
        categoryId,
      },
    });

    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: "Failed to add job." });
  }
};