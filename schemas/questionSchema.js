import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: String,
  possibleAnswers: [String],
});

export default mongoose.model("Question", questionSchema);
