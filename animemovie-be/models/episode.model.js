import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema(
  {
    movieId: { type: mongoose.Types.ObjectId, required: true },
    name: { type: String, required: true },
    
  },
  { timestamps: true },
);

export const Episode = mongoose.model("Episode", episodeSchema);
