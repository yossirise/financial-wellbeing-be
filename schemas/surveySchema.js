import mongoose from "mongoose";
import answerSchema from "./answerSchema";
const surveySchema = new mongoose.Schema({
    answers: [answerSchema]
})

export default surveySchema;