import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import { TAdvertisementResponseArray } from "../../interfaces/advertisement.interfaces";
import repositories from "../../utils/respositorys";
import advertisementSchema from "../../schemas/advertisementSchema";

export const advertisementGetAllService = async (
  filterObj: any
): Promise<TAdvertisementResponseArray> => {
  const advertisementRepo: Repository<Advertisement> =
    repositories.advertisement;

  let ads = [];

  if (filterObj) {
    ads = await advertisementRepo
      .createQueryBuilder("ads")
      .innerJoin("ads.user", "user")
      .addSelect("user.name")
      .where(filterObj)
      .getMany();

    return ads;
  }

  ads = await advertisementRepo
    .createQueryBuilder("ads")
    .innerJoin("ads.user", "user")
    .addSelect("user.name")
    .getMany();

  return ads;
};
