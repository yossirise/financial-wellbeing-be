import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: String,
  text: String,
  possibleAnswers: [String],
});

export default mongoose.model("Question", questionSchema);
