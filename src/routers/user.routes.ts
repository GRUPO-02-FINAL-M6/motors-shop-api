import { Router } from "express";
import controllers from "../controllers";

const user = Router();

user.post("/login", controllers.users.userLogin);
user.post("", controllers.users.userCreate);

user.get("/all", controllers.users.userReadAll);
user.get("/profile", controllers.users.userReadProfile);
user.get("/:id", controllers.users.userReadById);

user.patch("", controllers.users.userUpdateProfile);
user.delete("", controllers.users.userDelete);

export default user;
