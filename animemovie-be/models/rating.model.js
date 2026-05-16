import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    accountId: { type: mongoose.Types.ObjectId, required: true },
    movieId: { type: mongoose.Types.ObjectId, required: true },
    value: { type: Number },
  },
  { timestamps: true },
);

export const Rating = mongoose.model("Rating", ratingSchema);
