import express from "express";
import dotenv from "dotenv";
dotenv.config();

import accountRouter from "./routes/account.route.js";
import { connectToDb } from "./configs/db.js";


const app = express();
await connectToDb();

app.use(express.json());

app.use("/account", accountRouter);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
