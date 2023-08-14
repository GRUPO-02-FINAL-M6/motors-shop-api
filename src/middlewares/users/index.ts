import { verifyEmailExist, verifyUserExist } from "./user.middlewares";

const userMiddlewares = {
  verifyEmailExist,
  verifyUserExist,
};

export default userMiddlewares;
