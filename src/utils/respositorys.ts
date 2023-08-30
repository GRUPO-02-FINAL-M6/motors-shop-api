import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { User } from "../entities/user.entitie";
import { entites } from "../entities";
import { Advertisement } from "../entities/Advertisement.entitie";
import { CommentAds } from "../entities/Comment.entity";

const user: Repository<User> = AppDataSource.getRepository(entites.User);
const advertisement: Repository<Advertisement> = AppDataSource.getRepository(entites.Advertisement);
const comment: Repository<CommentAds> = AppDataSource.getRepository(entites.CommentAds);

const repositories = {
  user,
  advertisement,
  comment
};

export default repositories;
