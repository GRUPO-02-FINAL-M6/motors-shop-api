import { NextFunction, Request, Response } from "express";
import repositories from "../utils/respositorys";
import { advertisementServices } from "../services/advertisement.services";
import { AppError } from "../errors";

const verifyIsOwnerAdvertisement = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const user = await repositories.user.findOneBy({
        id: Number(res.locals.userId),
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    const advertisement = await advertisementServices.advertisementGetService(Number(req.params.id));

console.log(user);
console.log(advertisement.user);

    if (advertisement.user.id == user.id) {

        return next();
    } else {
        throw new AppError("unauthorized", 401);
    }


};

export default verifyIsOwnerAdvertisement;
