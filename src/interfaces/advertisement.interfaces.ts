import { z } from "zod";
import advertisementSchema from "../schemas/advertisementSchema";

export type TAdvertisement = z.infer<typeof advertisementSchema.advertisement>;
export type TAdvertisementRequest = z.infer<typeof advertisementSchema.advertisementRequest>;
export type TAdvertisementResponseArray = z.infer<typeof advertisementSchema.advertisementResponseArray>;
export type TAdvertisementUpdate = z.infer<typeof advertisementSchema.advertisementUpdate>;
