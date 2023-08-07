import { Request, Response } from "express";
import { advertisementCreateService } from "../services/advertisement.services/advertisementCreate.service";
import advertisementSchema from "../schemas/advertisementSchema";
import { advertisementGetAllService } from "../services/advertisement.services/advertisementGetAll.service";
import { advertisementGetService } from "../services/advertisement.services/advertisementGet.service";

const advertisementCreate = async (req: Request, res: Response): Promise<Response> => {
  const reqIsValid = advertisementSchema.advertisementRequest.parse(req.body);

  const advertisement = await advertisementCreateService(reqIsValid, res.locals.userId);
  return res.status(200).json(advertisement);
};

const advertisementReadAll = async (req: Request, res: Response): Promise<Response> => {
  const ads = await advertisementGetAllService()
  return res.status(200).json(ads);
};

const advertisementRead = async (req: Request, res: Response): Promise<Response> => {
  const advertisement = await advertisementGetService(req.params.adsId);
  return res.status(200).json(advertisement);
};

const advertisementUpdate = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "Anúncio ATUALIZADO" });
};

const advertisementDelete = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "Anúncio DELETADO" });
};

const advertisement = {
  advertisementCreate,
  advertisementRead,
  advertisementReadAll,
  advertisementUpdate,
  advertisementDelete,
};

export default advertisement;
