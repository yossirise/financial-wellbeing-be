import mongoose from "mongoose";

const surveySchema = new mongoose.Schema(
  {
    "What is your name?": String,
    "How old are you?": Number,
    "How many houses do you own?": Number,
    "How many children do you have?": Number,
    "Do you save money?": Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Survey", surveySchema);
