import express from "express";
import { EpisodeController } from "../controllers/episode.controller.js";

const router = express.Router();

router.get("/movie/:movieId", EpisodeController.findByMovie);
router.get("/:id", EpisodeController.findOne);

export default router;