import Survey from "../schemas/surveySchema";

export function postSurvey(req, res, next) {
    try {
        const survey = {answers: req.body}
        const mongoSurvey = new Survey(survey);
        const addToSurveyCollection = mongoSurvey.save();
        res.send(addToSurveyCollection);
    } catch (err) {
        console.log(err);
    }
}