import { z } from "zod";
import userSchema from "../schemas/userSchema";

export type TUser = z.infer<typeof userSchema.user>;
export type TUserRequest = z.infer<typeof userSchema.userRequest>;
export type TUserResponse = z.infer<typeof userSchema.userResponse>;
export type TUserUpdate = z.infer<typeof userSchema.userUpdate>;
