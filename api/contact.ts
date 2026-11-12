import type { Request, Response } from "express";
export default function handler(req: Request, res: Response) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Use POST." });
  }
  return res
    .status(503)
    .json({
      success: false,
      error:
        "Email delivery is not configured. Please email aime200816@gmail.com directly. No message has been sent.",
    });
}
