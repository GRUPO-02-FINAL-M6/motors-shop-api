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
  const perPage = 12;
  const pageMax = maxItens / perPage;

  if (!page) {
    page = 1;
  }

  if (pageMax < page) {
    page = Math.ceil(pageMax);
  }

  let perPageVerification = (page - 1) * perPage;

  if (perPageVerification < 0) {
    page = 1;
    perPageVerification = perPage;
  }

  const query = advertisementRepo
    .createQueryBuilder("ads")
    .innerJoin("ads.user", "user")
    .addSelect("user.name")
    .take(perPage)
    .skip(perPageVerification);

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

  if (pageMax < page) {
    nextPage = null;
  }

  if (pageMax == 1) {
    nextPage = null;
  }

  const response: TAdvertisementResponsePagination = {
    page: page,
    maxPages: Math.ceil(pageMax),
    previousPage: previousPage,
    nextPage: nextPage,
    ads: ads,
  };

  return response;
};
