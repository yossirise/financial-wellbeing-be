import express from "express";
import { postSurvey } from "../controllers/surveyController.js";
const router = express.Router();

router.post('/', postSurvey)

export default router;
