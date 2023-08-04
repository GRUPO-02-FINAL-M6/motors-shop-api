import { z } from "zod";

const car = z.object({
  id: z.number(),
  name: z.string(),
  brand: z.string(),
  description: z.string(),
  year: z.string(),
  km: z.number(),
  createdAt: z.date(),
  deletedAt: z.date(),
});

const carRequest = car.omit({
  id: true,
  createdAt: true,
  deletedAt: true,
});

const carResponseArray = car.array();

const carUpdate = carRequest.partial();

const carSchema = {
  car,
  carRequest,
  carResponseArray,
  carUpdate,
};

export default carSchema;
