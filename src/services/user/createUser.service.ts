import { Address } from "../../entities/Address.entity";
import { User } from "../../entities/user.entitie";
import { TUserRequest } from "../../interfaces/user.interfaces";
import userSchema from "../../schemas/userSchema";
import repositories from "../../utils/respositorys";

const createUser = async (userData: TUserRequest) => {
  const user: User = repositories.user.create(userData);
  await repositories.user.save(user);
  const createAddress: Address = repositories.address.create({...userData.address, user: user});
  await repositories.address.save(createAddress);

  

  return userSchema.userResponse.parse({...createAddress,...user});
};

export default createUser;
