import Survey from "../schemas/surveySchema.js";

export async function postSurvey(req, res, next) {
  try {
    const survey = { answers: req.body };
    const mongoSurvey = new Survey(survey);
    const addToSurveyCollection = await mongoSurvey.save();
    res.send(addToSurveyCollection);
  } catch (err) {
    res.status(400).send({ message: "there has been an error" });
  }
}
