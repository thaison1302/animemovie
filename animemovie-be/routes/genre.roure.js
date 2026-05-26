import express from "express";
import { GenreController } from "../controllers/genre.controller.js";

const router = express.Router();

router.get("/", GenreController.find);


export default router;