const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

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
        password:{
            type:String,
            required:[true,"mot de passe est requis"],
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
        isVerified:{
            type:Boolean,
            default:false
        },
        resetPasswordToken: String,
        resetPasswordTokenExpiresAt: Date,
        verificationToken: String,
        verificationTokenExpiresAt: Date,
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

