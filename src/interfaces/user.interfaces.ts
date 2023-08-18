import { z } from "zod";
import userSchema from "../schemas/userSchema";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema.user>;
export type TUserRequest = z.infer<typeof userSchema.userRequest>;
export type TUserResponse = z.infer<typeof userSchema.userResponse>;
export type TUserUpdate = DeepPartial<TUserRequest>;
export type TLogin = z.infer<typeof userSchema.login>;
