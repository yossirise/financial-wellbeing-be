import express from "express";
import { postSurvey, getAllSurveys, deleteSurvey } from "../controllers/surveyController.js";
const router = express.Router();

router.post('/', postSurvey)
router.get('/', getAllSurveys)
router.delete('/:id', deleteSurvey)

export default router;
