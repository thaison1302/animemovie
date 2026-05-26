import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    totalEpisode: { type: Number, required: true },
    genres: [String],
    link: { type: String },
  },
  { timestamps: true },
);

export const Movie = mongoose.model("Movie", movieSchema);
