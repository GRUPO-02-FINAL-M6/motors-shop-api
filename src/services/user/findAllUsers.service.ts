import { User } from "../../entities/user.entitie";
import { TUserRequest } from "../../interfaces/user.interfaces";
import repositories from "../../utils/respositorys";

const findAllUsers = async (userData: TUserRequest) => {
  const users: User[] | null = await repositories.user.find();
  return users;
};

export default findAllUsers;
