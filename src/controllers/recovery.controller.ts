import { Request, Response } from "express";
import { getFilters } from "../services/filters.services/getAllFilters.service";
import repositories from "../utils/respositorys";
import { sendEmail } from "../services/nodemailler/nodemailer";
import { sendEmailRecovery } from "../services/recovery.services/recoverySendEmail.service";
import { sign } from "jsonwebtoken";

export const changePass = async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.body;
    const user = await repositories.user.findOneBy({ email: email });

    if (user) {
        const token = sign({ changePass: true }, String(process.env.SECRET_KEY), {
            expiresIn: "10m",
            subject: String(user.id),
        });

        const send = sendEmailRecovery(email,token);

        return res.status(200).send();
    } else {
        return res.status(404).send();
    }
};


