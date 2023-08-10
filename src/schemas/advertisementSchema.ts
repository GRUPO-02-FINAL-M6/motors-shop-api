import { z } from "zod";
import userSchema from "./userSchema";
import { Fuel } from "../entities/Advertisement.entitie";

const maxYear = new Date().getFullYear() + 1;
const advertisement = z.object({
  id: z.number(),
  name: z.string(),
  brand: z.string(),
  description: z.string(),
  year: z.number().max(maxYear),
  km: z.number(),
  color: z.string(),
  images: z.array(z.string()),
  fuel: z.enum([Fuel.electric, Fuel.flex, Fuel.hybrid]),
  createdAt: z.date().or(z.string()),
  user: userSchema.userResponse,
  price: z.number(),
  priceFip: z.number(),
  modelCar: z.string()
});

const advertisementRequest = advertisement.omit({
  id: true,
  createdAt: true,
  user: true,
});

const advertisementResponseArray = advertisement.array();

const advertisementUpdate = advertisementRequest.partial();

const advertisementSchema = {
  advertisement,
  advertisementRequest,
  advertisementResponseArray,
  advertisementUpdate,
};

export default advertisementSchema;
