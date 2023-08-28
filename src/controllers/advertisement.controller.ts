import { Request, Response } from "express";
import advertisementSchema from "../schemas/advertisementSchema";
import { advertisementServices } from "../services/advertisement.services";

const advertisementCreate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const reqIsValid = advertisementSchema.advertisementRequest.parse(req.body);

  const advertisement = await advertisementServices.advertisementCreateService(
    reqIsValid,
    res.locals.userId
  );
  return res.status(200).json(advertisement);
};

const advertisementReadAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const filterObj = req.query;
  const page = Number(req.query?.page);
  const ads = await advertisementServices.advertisementGetAllService(
    filterObj,
    page
  );
  return res.status(200).json(ads);
};

const advertisementRead = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertisement = await advertisementServices.advertisementGetService(
    Number(req.params.adsId)
  );
  return res.status(200).json(advertisement);
};

const advertisementUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertisement = await advertisementServices.advertisementUpdateService(
    req.body,
    Number(req.params.id),
    Number(res.locals.userId)
  );
  return res.status(200).json(advertisement);
};

const advertisementDelete = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await advertisementServices.advertisementDeleteService(Number(req.params.id));
  return res.status(200).send();
};

const advertisement = {
  advertisementCreate,
  advertisementRead,
  advertisementReadAll,
  advertisementUpdate,
  advertisementDelete,
};

export default advertisement;
