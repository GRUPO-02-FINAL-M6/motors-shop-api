import { User } from "../../entities/user.entitie";
import userSchema from "../../schemas/userSchema";
import repositories from "../../utils/respositorys";

const findAllUsers = async () => {
  const users: User[] | null = await repositories.user.find();
  return userSchema.userAllResponse.parse(users);
};

export default findAllUsers;
