import { User } from "../../entities/user.entitie";
import { TUserRequest } from "../../interfaces/user.interfaces";
import userSchema from "../../schemas/userSchema";
import repositories from "../../utils/respositorys";

const createUser = async (userData: TUserRequest) => {
  const user: User = repositories.user.create(userData);
  await repositories.user.save(user);

  return userSchema.userResponse.parse(user);
};

export default createUser;
