import express from "express";
import { AccountController } from "../controllers/account.controller.js";
import { AccountMiddleware } from "../middlewares/account.middleware.js";

const router = express.Router();

router.post("/register", AccountController.register);
router.post(
  "/login",
  AccountMiddleware.validateLogin,
  AccountController.login,
);

export default router;
