import mongoose from "mongoose";

const watchHistorySchema = new mongoose.Schema(
  {
    accountId: { type: mongoose.Types.ObjectId, required: true },
    movieId: { type: mongoose.Types.ObjectId, required: true },
    episodeId: { type: mongoose.Types.ObjectId, required: true},
    resumeMin: { type: Number, required: true },
    
  },
  { timestamps: true },
);

export const WatchHistory = mongoose.model("WatchHistory", watchHistorySchema);
