import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: String,
  answer: Number,
});

const surveySchema = new mongoose.Schema(
  {
    email: String,
    answers: [answerSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Survey", surveySchema);
