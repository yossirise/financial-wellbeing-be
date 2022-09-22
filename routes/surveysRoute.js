import express from "express";
import { postSurvey, getAllSurveys, deleteSurvey, getTotalScore } from "../controllers/surveyController.js";
const router = express.Router();

router.post('/', postSurvey)
router.get('/', getAllSurveys)
router.get('/totalScore', getTotalScore)
router.delete('/:id', deleteSurvey)

export default router;
