import Survey from "../schemas/surveySchema.js";

export async function getAnswerCount(req, res, next) {
  const { questionId } = req.params;

  try {
    const answers = (
      await Survey.find({}, { answers: { $elemMatch: { questionId } } })
    ).map(({ answers }) => answers[0].answer);

    const count = {};

    for (const answer of answers) {
      const answerCount = count[answer] ?? 0;
      count[answer] = answerCount + 1;
    }

    res.send(count);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "error" });
  }
}
