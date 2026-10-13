import express from "express";
import cors from "cors";
import helmet from "helmet";

import contactRoutes from "./modules/contact/contact.routes.js";

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Infinity Labs API is running",
  });
});

app.use("/api/contact", contactRoutes);

export default app;