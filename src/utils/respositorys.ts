import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { User } from "../entities/user.entitie";
import { entites } from "../entities";
import { Advertisement } from "../entities/Advertisement.entitie";

const user: Repository<User> = AppDataSource.getRepository(entites.User);
const advertisement: Repository<Advertisement> = AppDataSource.getRepository(entites.Advertisement);

const repositories = {
  user,
  advertisement,
};

export default repositories;
