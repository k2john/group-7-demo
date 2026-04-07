import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes";
import notifyRoutes from "./routes/notify.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Static files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/notify", notifyRoutes);

export default app;