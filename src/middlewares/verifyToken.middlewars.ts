import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authorization: string | null | undefined = req.headers.authorization;

  if (!authorization)
    return res.status(401).json({ message: "Missing bearer token" });

  const [_bearer, token] = authorization.split(" ");

  verify(token, String(process.env.SECRET_KEY), (err: any, decode: any) => {
    if (err) return res.status(401).json({ message: err.message });

    const userId: string = decode.sub;
    res.locals.userId = userId;
  });

  return next();
};

export default verifyToken;
