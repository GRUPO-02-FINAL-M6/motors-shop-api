import { Request, Response } from "express";
import repositories from "../utils/respositorys";
import { sendEmailRecovery } from "../services/recovery.services/recoverySendEmail.service";
import { sign, verify } from "jsonwebtoken";
import { AppError } from "../errors";
import patchProfile from "../services/user/patchProfile.service";

export const sendChangePass = async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.body;
    const user = await repositories.user.findOneBy({ email: email });

    if (user) {
        const token = sign({ changePass: true }, String(process.env.SECRET_KEY), {
            expiresIn: "10m",
            subject: String(user.id),
        });

        const send = sendEmailRecovery(email, token);

        return res.status(200).send();
    } else {
        return res.status(404).send();
    }
};

export const changePass = async (req: Request, res: Response) => {
    const authorization: string | null | undefined = req.headers.authorization;

    if (!authorization)
        return res.status(401).json({ message: "Missing bearer token" });

    const [_bearer, token] = authorization.split(" ");

    verify(token, String(process.env.SECRET_KEY), (err: any, decode: any) => {
        if (err) throw new AppError("invalid token", 401);
        const userId: string = decode.sub;
        res.locals.userId = userId;
    });

    await patchProfile(res.locals.userId, { password: req.body.password });


    return res.status(204).send();
}

