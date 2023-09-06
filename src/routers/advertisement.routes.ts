import { Router } from "express";
import controllers from "../controllers";
import verifyToken from "../middlewares/verifyToken.middlewars";
import verifyIsOwnerAdvertisement from "../middlewares/verifyIsOwnerAdvertisement.middlewares";

const advertisement = Router();
advertisement.get("", controllers.ads.advertisementReadAll);
advertisement.get("/:adsId", controllers.ads.advertisementRead);
//Start Comments
advertisement.get("/:adsId/comments", controllers.commentController.commentReadAll);
advertisement.use(verifyToken);
advertisement.post("/:adsId/comments", controllers.commentController.commentCreate);
advertisement.patch("/comments/:id",controllers.commentController.commentUpdate);
advertisement.delete("/comments/:id",controllers.commentController.commentDelete);
//End Comments
advertisement.post("", controllers.ads.advertisementCreate);
advertisement.patch("/:id",verifyIsOwnerAdvertisement,controllers.ads.advertisementUpdate);
advertisement.delete("/:id",verifyIsOwnerAdvertisement,controllers.ads.advertisementDelete);

export default advertisement;
