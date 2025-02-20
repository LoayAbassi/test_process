const express = require('express');
const {validateQuestion } = require("../middlewares/questionMiddleware");

const { createQuestion, getQuestions, updateQuestion, deleteQuestion } = require("../controllers/questionController");

const router = express.Router();

router.post("/questions",validateQuestion, createQuestion);
router.get("/questions", getQuestions);
router.put("/questions/:id", updateQuestion);
router.delete("/questions/:id", deleteQuestion);

module.exports = router;