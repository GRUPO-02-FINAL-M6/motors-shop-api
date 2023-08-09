import { NextFunction, Response, Request } from "express";
import repositories from "../../utils/respositorys";
import { AppError } from "../../errors";

export const verifyEmailExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const user = await repositories.user.findOneBy({ email: email });

  if (user) {
    console.log(user);
    throw new AppError("email already exists", 409);
  }
  next();
};
