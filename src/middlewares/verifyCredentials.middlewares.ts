import { compareSync } from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import repositories from "../utils/respositorys";

const verifyCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData = req.body;

  const user = await repositories.user.findOneBy({
    email: userData.email,
  });

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const userInactive = user.deletedAt;
  if (userInactive)
    return res.status(401).json({ message: "Invalid credentials" });

  const userPassword: string = user.password;
  const userRequestPassword: string = userData.password;

  const validatePassword: boolean = compareSync(
    userRequestPassword,
    userPassword
  );

  if (!validatePassword)
    return res.status(401).json({ message: "Invalid credentials" });

  res.locals.userId = user.id;

  return next();
};

export default verifyCredentials;
