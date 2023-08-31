import { Router } from "express";
import controllers from "../controllers";
import verifyCredentials from "../middlewares/verifyCredentials.middlewares";
import verifyToken from "../middlewares/verifyToken.middlewars";
import validateSchema from "../middlewares/validateSchema.middlewares";
import userSchema from "../schemas/userSchema";
import userMiddlewares from "../middlewares/users/user.middlewares";

const user = Router();

user.post(
  "",
  validateSchema(userSchema.userRequest),
  userMiddlewares.verifyEmailExist,
  controllers.users.userCreate
);
user.post("/login", verifyCredentials, controllers.users.userLogin);


user.get("/all", controllers.users.userReadAll);
user.get(
  "/:id",
  userMiddlewares.verifyUserExist,
  controllers.users.userReadById
);
user.use(verifyToken);
user.get("/profile", controllers.users.userReadProfile);
user.patch("", controllers.users.userUpdateProfile);
user.delete("", controllers.users.userDelete);

export default user;
