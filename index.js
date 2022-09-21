import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

process.stdout.write("Connecting to MongoDB... ");
await mongoose.connect(process.env.MONGODB);
console.log("connected");

app.listen(port, () => {
  console.log("Listening on port " + port);
});