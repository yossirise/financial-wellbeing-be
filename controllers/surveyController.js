import axios from "axios";
import Survey from "../schemas/surveySchema.js";

export async function postSurvey(req, res, next) {
  const bodyValid =
    Object.keys(req.body).length === 7 &&
    Object.values(req.body).every((v) => 0 <= v && v < 5);

  if (!bodyValid) {
    return res.status(400).send({
      message:
        "please provied exactly seven answers with values ranging from 0 to 4",
    });
  }

  const answers = Object.keys(req.body).map((questionId) => ({
    questionId,
    answer: req.body[questionId],
  }));

  try {
    const { score } = (
      await axios.post("http://52.58.188.250:8080/wellbeingscore", req.body)
    ).data;

    const mongoSurvey = new Survey({ answers, score: Math.round(score) });
    const addToSurveyCollection = await mongoSurvey.save();
    res.send(addToSurveyCollection);
  } catch (err) {
    res.status(400).send({ message: "there has been an error" });
  }
}

export async function getAllSurveys(req, res, next) {
  try {
    const surveys = await Survey.find();
    res.send(surveys);
  } catch (err) {
    res.status(400).send({ message: "error" });
  }
}

export async function deleteSurvey(req, res, next) {
  try {
    const deletedSurvey = await Survey.findByIdAndDelete(req.params.id);
    res.send(deletedSurvey);
  } catch (err) {
    res.status(400).send({ message: "error" });
  }
}

export async function getTotalScore(req, res, next) {
  try {
    const totalScore = await Survey.aggregate([
      { $group: { _id: null, totalScore: { $avg: "$score" } } },
    ]);
    res.send({ totalScore: Math.round(totalScore[0].totalScore) });
  } catch (err) {
    res.status(400).send({ message: "error" });
  }
}
