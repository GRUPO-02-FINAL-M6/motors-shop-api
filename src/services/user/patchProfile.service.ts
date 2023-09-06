import { User } from "../../entities/user.entitie";
import { TUser, TUserUpdate } from "../../interfaces/user.interfaces";
import userSchema from "../../schemas/userSchema";
import repositories from "../../utils/respositorys";

const patchProfile = async (userId: number, newData: TUserUpdate) => {
  const user = await repositories.user.findOneBy({
    id: userId,
  });

  const newDataFormed: TUserUpdate = {
    ...user,
    ...newData,
  };

  await repositories.user.save(newDataFormed);

  return userSchema.userResponse.parse(newDataFormed);
};

export default patchProfile;
