import express from "express";
import { getAnswerCount } from "../controllers/answersController.js";

const router = express.Router();

router.get('/count', getAnswerCount)

export default router;
