import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories." });
  }
};
