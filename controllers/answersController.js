import Survey from "../schemas/surveySchema.js";

export async function getAnswerCount(req, res, next) {
  try {
    const { question } = req.query;

    const answers = (await Survey.find(null, [question])).map(
      (survey) => survey[question]
    );

    const count = {};

    for (const answer of answers) {
      const answerCount = count[answer] ?? 0;
      count[answer] = answerCount + 1;
    }

    res.send(count);
  } catch (err) {
    res.status(400).send({ message: "error" });
  }
}
