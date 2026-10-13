import type { Request, Response } from "express";

import { submitContactRequest } from "./contact.service.js";

export const createContactRequestController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactRequest = await submitContactRequest(req.body ?? {}, {
      ipAddress: req.ip ?? null,
      userAgent: req.get("user-agent") ?? null,
    });

    res.status(201).json({
      success: true,
      message: "Thank you. Your request has been received.",
      data: contactRequest,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to submit contact request";

    res.status(400).json({
      success: false,
      message,
    });
  }
};
