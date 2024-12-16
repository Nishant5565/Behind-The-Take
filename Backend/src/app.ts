import express from "express";
import jobRoutes from "./routes/jobRoutes";
import categoryRoutes from "./routes/categoryRoutes";

const app = express();

app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
