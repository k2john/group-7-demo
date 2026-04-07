import { Request, Response } from "express";
import { transporter } from "../config/mail";

export const sendEmail = async (req: Request, res: Response) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: "your_email@gmail.com",
      to,
      subject,
      text
    });

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email failed", error });
  }
};