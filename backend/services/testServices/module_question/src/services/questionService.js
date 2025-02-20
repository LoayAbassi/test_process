const Question = require('../models/questionModel');

const createQuestion = async (question) => {
    return await Question.create(question);
}

const getQuestions = async()=>{
    return await Question.find();
}

const updateQuestion = async(id_question, question)=>{
    return await Question.findOneAndUpdate({id_question},question,{new:true});
}

const deleteQuestion = async(id_question)=>{
    return await Question.findOneAndDelete({id_question});
}

module.exports = {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion
}