import { Router } from "express";
import controllers from "../controllers";
import verifyCredentials from "../middlewares/verifyCredentials.middlewares";
import verifyToken from "../middlewares/verifyToken.middlewars";
import userMiddlewares from "../middlewares/users";
import validateSchema from "../middlewares/validateSchema.middlewares";
import userSchema from "../schemas/userSchema";

const user = Router();

user.post(
  "",
  validateSchema(userSchema.userRequest),
  userMiddlewares.verifyEmailExist,
  controllers.users.userCreate
);
user.post("/login", verifyCredentials, controllers.users.userLogin);

user.use(verifyToken);

user.get("/all", controllers.users.userReadAll);
user.get("/profile", controllers.users.userReadProfile);
user.get(
  "/:id",
  userMiddlewares.verifyUserExist,
  controllers.users.userReadById
);

user.patch("", controllers.users.userUpdateProfile);
user.delete("", controllers.users.userDelete);

export default user;
