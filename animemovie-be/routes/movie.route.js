import express from "express";
import { MovieController } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/", MovieController.find);
router.get("/:id", MovieController.findOne)

export default router;