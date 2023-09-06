"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const errors_1 = require("../../errors");
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: 'finalm6g2@gmail.com',
        pass: 'vwousarowawbyqvq' // substitua com sua senha
    },
    host: "smtp.gmail.com",
    port: 587
});
const sendEmail = (emailTo, message, subject) => {
    const mailOptions = {
        from: 'finalm6g2@gmail.com',
        to: emailTo,
        subject: subject,
        html: message
    };
    const send = transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar o e-mail:', error);
            throw new errors_1.AppError("Erro ao enviar email", 409);
        }
        else {
            console.log('E-mail enviado:', info.response);
            return "email enviado com sucesso";
        }
    });
    return send;
};
exports.sendEmail = sendEmail;
