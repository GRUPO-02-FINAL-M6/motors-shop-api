import { User } from "../../entities/user.entitie";
import userSchema from "../../schemas/userSchema";
import repositories from "../../utils/respositorys";

const findUser = async (userId: number) => {
  const users: User | null = await repositories.user.findOneBy({
    id: userId,
  });
  return userSchema.userResponse.parse(users);
};

export default findUser;
