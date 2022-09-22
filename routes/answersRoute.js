import express from "express";
import { getAnswerCount } from "../controllers/answersController.js";

const router = express.Router();

router.get("/count/:questionId", getAnswerCount);
router.get("/count/:questionId", getAnswerCount);

export default router;
