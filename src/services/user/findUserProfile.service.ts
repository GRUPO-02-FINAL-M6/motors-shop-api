import { User } from "../../entities/user.entitie";
import userSchema from "../../schemas/userSchema";
import repositories from "../../utils/respositorys";

const findUser = async (userId: number) => {
  const user: User | null = await repositories.user.createQueryBuilder("user").innerJoinAndSelect("user.address", "address").innerJoinAndSelect("user.ads", "ads").where("user.id = :userId", { userId }).getOne();
  
  return userSchema.userResponse.parse(user);
};

export default findUser;
