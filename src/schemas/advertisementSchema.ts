import { number, z } from "zod";
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
  user: userSchema.userResponse.omit({address:true}),
  price: z.number(),
  priceFip: z.number(),
  active: z.boolean()
});

const advertisementRequest = advertisement.omit({
  id: true,
  createdAt: true,
  user: true,
  active: true
});
const CommentAds = z.object({
  id: z.number(),
  user: userSchema.userResponse.omit({address: true}),
  description: z.string(),
  createdAt: z.string().or(z.date()),
  advertismentId: z.number()
});
const CommentPatchAds = z.object({
  id: z.number(),
  description: z.string(),
  createdAt: z.string().or(z.date()),
});
const CommentsAds = z.array(CommentAds.omit({advertismentId: true}));

const advertisementResponseArray = advertisement.array();

const advertisementUpdate = advertisementRequest.partial();

const advertisementResponsePagination = z.object({
  page: z.number(),
  maxPages: z.number(),
  previousPage: z.string().or(z.null()).or(z.undefined()),
  nextPage: z.string().or(z.null()).or(z.undefined()),
  ads: advertisementResponseArray || [z.null],
});

const advertisementSchema = {
  advertisement,
  advertisementRequest,
  advertisementResponseArray,
  advertisementUpdate,
  advertisementResponsePagination,
  CommentAds,
  CommentsAds,
  CommentPatchAds
};

export default advertisementSchema;
