const questionService = require('../services/questionService');

const createQuestion = async(req, res)=>{
    try {
        const question = await questionService.createQuestion(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getQuestions = async(req,res)=>{
    try {
        const questions = await questionService.getQuestions();
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const updateQuestion = async(req,res) =>{
    try {
        const question = await questionService.updateQuestion(req.params.id, req.body);
        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({error: error.message});
    }   
}

const deleteQuestion = async(req,res)=>{
    try {
        const result = await questionService.deleteQuestion(req.params.id);
        if (!result) {
            return res.status(404).json({error: "Question not found"});
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion,
}
