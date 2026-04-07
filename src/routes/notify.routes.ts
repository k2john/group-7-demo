import { Router } from "express";
import { sendEmail } from "../controllers/notify.controller";

const router = Router();

router.post("/email", sendEmail);

export default router;