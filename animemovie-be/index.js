import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import accountRouter from "./routes/account.route.js";
import movieRouter from "./routes/movie.route.js";
import episodeRouter from "./routes/episode.route.js"
import genreRouter from "./routes/genre.roure.js"
import commentRouter from "./routes/comment.route.js" 
import { connectToDb } from "./configs/db.js";

const app = express();
await connectToDb();

app.use(express.json());
app.use(cors());

app.use("/account", accountRouter);
app.use("/movies", movieRouter);
app.use("/episodes", episodeRouter);
app.use("/genres", genreRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
