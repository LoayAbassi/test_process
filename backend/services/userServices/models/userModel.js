const mongoose = require('mongoose');
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema(
    {
        id_utilisateur: {
            type: Number,
            unique: true,
        },
        nom :{
            type: String,
            required: [true, "Nom est requis"],
        },
        prenom:{
            type: String,
            required: [true, "Prenom est requis"],
        },
        email:{
            type:String,
            required: [true, "Email est requis"],
            unique: true,
        },
        mot_passe:{
            type:String,
            required:[true,"mot de passe est requis"],
        },
        date_naissance:{
            type:Date,
            required:[true,"Date de naissance est requis"],
        },
        genre:{
            type:String,
            enum:["Homme","Femme"],
            required:[true,"Genre est requis"],
        },

        role: {
            type: String,
            enum: ["admin", "candidat"],
            default: "candidat",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(AutoIncrement,{inc_field:"id_utilisateur"});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

