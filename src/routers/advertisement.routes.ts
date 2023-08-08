import { Router } from "express";
import controllers from "../controllers";
import verifyToken from "../middlewares/verifyToken.middlewars";
import verifyIsOwnerAdvertisement from "../middlewares/verifyIsOwnerAdvertisement.middlewares";

const advertisement = Router();
advertisement.get("", controllers.ads.advertisementReadAll);
advertisement.get("/:adsId", controllers.ads.advertisementRead);
advertisement.use(verifyToken);
advertisement.post("", controllers.ads.advertisementCreate);
advertisement.patch("/:id", verifyIsOwnerAdvertisement, controllers.ads.advertisementUpdate);
advertisement.delete("/:id", verifyIsOwnerAdvertisement, controllers.ads.advertisementDelete);

export default advertisement;
