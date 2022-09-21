import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: { type: String },
  answer: { type: String },
});

export default answerSchema;
