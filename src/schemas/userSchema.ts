import { z } from "zod";

const user = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  contact: z.string(),
  description: z.string(),
  password: z.string(),
  createdAt: z.string().or(z.date()),
  is_seller: z.boolean(),
  deletedAt: z.string().nullable().or(z.date()),
  ads: z.any(),
});

const userRequest = user.omit({
  id: true,
  createdAt: true,
  deletedAt: true,
});

const userResponse = user.omit({
  password: true,
});

const userAllResponse = userResponse.array();

const userUpdate = userRequest.partial();

const login = z.object({
  email: z.string(),
  password: z.string(),
});

const userSchema = {
  user,
  userRequest,
  userResponse,
  userAllResponse,
  userUpdate,
  login,
};

export default userSchema;
