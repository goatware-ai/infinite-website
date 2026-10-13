import { Router } from "express";

import { createContactRequestController } from "./contact.controller.js";

const router = Router();

router.post("/", createContactRequestController);

export default router;
