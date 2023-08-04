import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { User } from "../entities/user.entitie";
import { entites } from "../entities";
import { Car } from "../entities/car.entitie";

const user: Repository<User> = AppDataSource.getRepository(entites.User);
const car: Repository<Car> = AppDataSource.getRepository(entites.Car);

const repositories = {
  user,
  car,
};

export default repositories;
