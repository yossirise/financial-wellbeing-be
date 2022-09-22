import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: String,
  answer: Number,
});

const surveySchema = new mongoose.Schema(
  {
    email: String,
    answers: [answerSchema],
    score: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Survey", surveySchema);
