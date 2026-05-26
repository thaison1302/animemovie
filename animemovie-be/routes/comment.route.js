import express from "express";
import { CommentController } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/", CommentController.createComment);
router.get("/movie/:movieId", CommentController.findByMovie);
router.get("/:id", CommentController.findOne);

export default router;