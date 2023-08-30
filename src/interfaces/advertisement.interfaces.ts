import { z } from "zod";
import advertisementSchema from "../schemas/advertisementSchema";
import { DeepPartial } from "typeorm";

export type TAdvertisement = z.infer<typeof advertisementSchema.advertisement>;
export type TComment = z.infer<typeof advertisementSchema.CommentAds>;
export type TCommentPatchAds = z.infer<typeof advertisementSchema.CommentPatchAds>;
export type TComments = z.infer<typeof advertisementSchema.CommentsAds>;
export type TAdvertisementRequest = z.infer<
  typeof advertisementSchema.advertisementRequest
>;
export type TAdvertisementResponseArray = z.infer<
  typeof advertisementSchema.advertisementResponseArray
>;
export type TAdvertisementUpdate = DeepPartial<TAdvertisementRequest>;
export type TAdvertisementResponsePagination = z.infer<
  typeof advertisementSchema.advertisementResponsePagination
>;
