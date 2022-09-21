import express from "express";
import { getAllQuestions } from "../controllers/questionsController.js";

const router = express.Router();

router.get("/", getAllQuestions);

export default router;
