import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { User } from "../entities/user.entitie";
import { entites } from "../entities";
import { Advertisement } from "../entities/Advertisement.entitie";
import { CommentAds } from "../entities/Comment.entity";
import { Address } from "../entities/Address.entity";

const user: Repository<User> = AppDataSource.getRepository(entites.User);
const address: Repository<Address> = AppDataSource.getRepository(entites.Address);
const advertisement: Repository<Advertisement> = AppDataSource.getRepository(entites.Advertisement);
const comment: Repository<CommentAds> = AppDataSource.getRepository(entites.CommentAds);

const repositories = {
  user,
  advertisement,
  address,
  comment
};

export default repositories;
