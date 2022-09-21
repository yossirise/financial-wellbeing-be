import mongoose from "mongoose";
import answerSchema from "./answerSchema.js";

const surveySchema = new mongoose.Schema({
  answers: [answerSchema],
});

export default mongoose.model("Survey", surveySchema);
