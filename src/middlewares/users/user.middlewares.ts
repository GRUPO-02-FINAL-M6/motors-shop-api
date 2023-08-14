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

export const verifyUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id = Number(req.params.id);

  if (!id) {
    id = res.locals.userId;
  }

  const user = await repositories.user.findOneBy({ id: id });

  if (!user) {
    throw new AppError("user not faund", 400);
  }
  next();
};
