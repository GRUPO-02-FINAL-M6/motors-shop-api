import { Router } from "express";
import controllers from "../controllers";
import userMiddlewares from "../middlewares/users/user.middlewares";

const recoveryPass = Router();

recoveryPass.post("",controllers.sendChangePass);
recoveryPass.patch("",controllers.changePass);


export default recoveryPass;
