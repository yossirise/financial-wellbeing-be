import express from "express";
import { getUserGeneralScore } from "../controllers/answersController.js";
const router = express.Router();

router.get('/', getUserGeneralScore)

export default router;