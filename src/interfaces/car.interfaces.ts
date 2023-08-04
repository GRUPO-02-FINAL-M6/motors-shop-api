import { z } from "zod";
import carSchema from "../schemas/carSchema";

export type TCar = z.infer<typeof carSchema.car>;
export type TCarRequest = z.infer<typeof carSchema.carRequest>;
export type TCarResponseArray = z.infer<typeof carSchema.carResponseArray>;
export type TCarUpdate = z.infer<typeof carSchema.carUpdate>;
