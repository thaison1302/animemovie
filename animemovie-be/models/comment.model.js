import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    accountId: { type: mongoose.Types.ObjectId, required: true },
    movieId: { type: mongoose.Types.ObjectId, required: true },
    value: { type: String },
    
  },
  { timestamps: true },
);

export const Comment = mongoose.model("Comment", commentSchema);
