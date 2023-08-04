import { date, string, z } from "zod";

const user = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  contact: z.string(),
  password: z.string(),
  createdAt: z.date(),
  deletedAt: z.date(),
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

const userSchema = {
  user,
  userRequest,
  userResponse,
  userAllResponse,
  userUpdate,
};

export default userSchema;
