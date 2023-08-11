import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import { TAdvertisementResponsePagination } from "../../interfaces/advertisement.interfaces";
import repositories from "../../utils/respositorys";

export const advertisementGetAllService = async (
  filterObj: any,
  page?: number
): Promise<TAdvertisementResponsePagination> => {
  const advertisementRepo: Repository<Advertisement> =
    repositories.advertisement;

  const advertisementAll = await advertisementRepo.find();
  const maxItens = advertisementAll.length;

  if (!page) {
    page = 1;
  }

  const perPage = 12;

  if (maxItens / perPage < page) {
    const pageMax = maxItens / perPage;

    page = Math.ceil(pageMax);
  }

  const query = advertisementRepo
    .createQueryBuilder("ads")
    .innerJoin("ads.user", "user")
    .addSelect("user.name")
    .take(perPage)
    .skip((page - 1) * perPage);

  if (filterObj.name) {
    query.andWhere("LOWER(ads.name) LIKE :name", {
      name: `%${filterObj.name.toLowerCase()}%`,
    });
  }
  if (filterObj.color) {
    query.andWhere("LOWER(ads.color) LIKE :color", {
      color: `%${filterObj.color.toLowerCase()}%`,
    });
  }
  if (filterObj.kmMin !== undefined) {
    query.andWhere("ads.km >= :kmMin", { kmMin: filterObj.kmMin });
  }
  if (filterObj.kmMax !== undefined) {
    query.andWhere("ads.km <= :kmMax", { kmMax: filterObj.kmMax });
  }

  if (filterObj.valueMin !== undefined) {
    query.andWhere("ads.value >= :valueMin", { valueMin: filterObj.valueMin });
  }
  if (filterObj.valueMax !== undefined) {
    query.andWhere("ads.value <= :valueMax", { valueMax: filterObj.valueMax });
  }

  if (filterObj.brand) {
    query.andWhere("LOWER(ads.brand) LIKE :brand", {
      brand: `%${filterObj.brand.toLowerCase()}%`,
    });
  }

  const ads = await query.getMany();

  let nextPage: string | null = `/advertisement?page=${page + 1}`;
  let previousPage: string | null = `/advertisement?page=${page - 1}`;

  if (page * maxItens < page) {
    nextPage = null;
  }

  if (page == 1) {
    previousPage = null;
  }

  if (maxItens / perPage < page) {
    nextPage = null;
  }

  const response: TAdvertisementResponsePagination = {
    page: page,
    previousPage: previousPage,
    nextPage: nextPage,
    ads: [...ads],
  };

  return response;
};
