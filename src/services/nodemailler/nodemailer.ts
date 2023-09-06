import nodemailer from "nodemailer";
import { AppError } from "../../errors";


const transporter = nodemailer.createTransport({
    service: 'Gmail', // ou use outros serviços de e-mail
    auth: {
        user: 'finalm6g2@gmail.com', // substitua com seu e-mail
        pass: 'vwousarowawbyqvq' // substitua com sua senha
    },
    host: "smtp.gmail.com",
    port: 587
});


export const sendEmail = (emailTo: string, message: string, subject: string) => {
    const mailOptions = {
        from: 'finalm6g2@gmail.com',
        to: emailTo,
        subject: subject,
        html: message
    };

    const send = transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar o e-mail:', error);
            throw new AppError("Erro ao enviar email", 409)
        } else {
            console.log('E-mail enviado:', info.response);
            return "email enviado com sucesso"
        }
    });

    return send;
}

