import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import { TAdvertisementResponseArray } from "../../interfaces/advertisement.interfaces";
import repositories from "../../utils/respositorys";

export const advertisementGetAllService = async (
  filterObj: any
): Promise<TAdvertisementResponseArray> => {
  const advertisementRepo: Repository<Advertisement> =
    repositories.advertisement;

  const query = advertisementRepo
    .createQueryBuilder("ads")
    .innerJoin("ads.user", "user")
    .addSelect("user.name")



  if (filterObj.name) {
    query.andWhere("LOWER(ads.name) LIKE :name", { name: `%${filterObj.name.toLowerCase()}%` });
  }

  if (filterObj.valueMin !== undefined) {
    query.andWhere("ads.value >= :valueMin", { valueMin: filterObj.valueMin });
  }
  if (filterObj.valueMax !== undefined) {
    query.andWhere("ads.value <= :valueMax", { valueMax: filterObj.valueMax });
  }

  if (filterObj.brand) {
    query.andWhere("LOWER(ads.brand) LIKE :brand", { brand: `%${filterObj.brand.toLowerCase()}%` });
  }

  const ads = await query.getMany();

  return ads;

};
