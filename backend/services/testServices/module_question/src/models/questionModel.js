const mongoose = require('mongoose');

const AutoIncrement = require("mongoose-sequence")(mongoose);

const questionSchema = new mongoose.Schema(
    {
        id_question: {
            type: Number,
            unique: true,
        },
        num_question: {
            type: Number,
            required: true 
        },
        contenu_question: {
            type: String, 
            required: true 

        },
        pole_question: {
            type: String, 
            enum: ["croissant", "decroissant"], 
            required: true 

        },
        type_category: {
            type: String, 
            required: true 

        },
        type_facette: {
            type: String, 
            required: true 

        }
    },{
        timestamps: true,
    });

questionSchema.plugin(AutoIncrement,{inc_field:"id_question"});

module.exports = mongoose.model("Question", questionSchema);