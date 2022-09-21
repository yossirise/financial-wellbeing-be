import Survey from "../schemas/surveySchema.js";

export async function postSurvey(req, res, next) {
  const answers = Object.keys(req.body).map((questionId) => ({
    questionId,
    answer: req.body[questionId],
  }));

  try {
    const mongoSurvey = new Survey({ answers });
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
