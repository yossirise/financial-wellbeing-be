import Question from "../schemas/questionSchema.js";

export async function getAllQuestions(req, res, next) {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (err) {
    res.status(400).send({ message: "error" });
  }
}