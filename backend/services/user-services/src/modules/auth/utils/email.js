const nodemailer = require("nodemailer");
const generateEmailTemplate = require("./emailTemplate");

const transporter = nodemailer.createTransport({

    
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    requireTLS:true,
    auth:{
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    },

    tls: {
        rejectUnauthorized: false, // tls verif
    },
});

const sendEmail = async(to, subject,email_type, data) =>{
    console.log(process.env.SMTP_PASSWORD);
    const mailOptions = {
        from:process.env.SMTP_EMAIL,
        to,
        subject,
        html: generateEmailTemplate(email_type, data)
    };
    try {
        await transporter.sendMail(mailOptions);
        return "email envoyé";
        

    } catch (error) {
        
        console.error("error envoie:\n", error);
        return "erreur d'envoie"

    }
};

module.exports = sendEmail;