import { Router } from "express";
import controllers from "../controllers";
import verifyCredentials from "../middlewares/verifyCredentials.middlewares";

const user = Router();

user.post("", controllers.users.userCreate);

user.post("/login", verifyCredentials, controllers.users.userLogin);

user.get("/all", controllers.users.userReadAll);
user.get("/profile", controllers.users.userReadProfile);
user.get("/:id", controllers.users.userReadById);

user.patch("", controllers.users.userUpdateProfile);
user.delete("", controllers.users.userDelete);

export default user;
