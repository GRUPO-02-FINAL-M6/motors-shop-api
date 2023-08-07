import { Router } from "express";
import controllers from "../controllers";
import verifyToken from "../middlewares/verifyToken.middlewars";

const advertisement = Router();
advertisement.get("", controllers.ads.advertisementReadAll);
advertisement.get("/:adsId", controllers.ads.advertisementRead);
advertisement.use(verifyToken);
advertisement.post("", controllers.ads.advertisementCreate);
advertisement.patch("", controllers.ads.advertisementUpdate);
advertisement.delete("", controllers.ads.advertisementDelete);

export default advertisement;
