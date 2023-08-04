import { z } from "zod";

const user = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  contact: z.string(),
  password: z.string(),
  createdAt: z.string(),
  deletedAt: z.string().nullable(),
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
