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

  let filterString = "";
  const query = advertisementRepo
    .createQueryBuilder("ads")
    .innerJoin("ads.user", "user")
    .addSelect("user.name")
    .addSelect("user.id")


  if (filterObj.modelCar && filterObj.modelCar.trim() != "") {
    query.andWhere("LOWER(ads.name) LIKE :name", {
      name: `%${filterObj.modelCar.toLowerCase()}%`,
    });
    filterString += "&" + filterObj.modelCar;
  }
  if (filterObj.color && filterObj.color.trim() != "") {
    query.andWhere("LOWER(ads.color) LIKE :color", {
      color: `%${filterObj.color.toLowerCase()}%`,
    });
  }
  if (filterObj.year !== undefined && filterObj.year.trim() != "") {
    query.andWhere("ads.year = :year", { year: filterObj.year });
  }
  if (filterObj.kmMin !== undefined && filterObj.kmMin.trim() != "") {
    query.andWhere("ads.km >= :kmMin", { kmMin: filterObj.kmMin });
  }
  if (filterObj.kmMax !== undefined && filterObj.kmMax.trim() != "") {
    query.andWhere("ads.km <= :kmMax", { kmMax: filterObj.kmMax });
  }

  if (filterObj.valueMin !== undefined && filterObj.valueMin.trim() != "") {
    query.andWhere("ads.price >= :valueMin", { valueMin: filterObj.valueMin });
  }
  if (filterObj.valueMax !== undefined && filterObj.valueMax.trim() != "") {
    query.andWhere("ads.price <= :valueMax", { valueMax: filterObj.valueMax });
  }

  if (filterObj.fuel && filterObj.fuel.trim() != "") {
    query.andWhere("LOWER(ads.fuel) LIKE :fuel", {
      fuel: `%${filterObj.fuel.toLowerCase()}%`,
    });
  }
  if (filterObj.brand && filterObj.brand.trim() != "") {
    query.andWhere("LOWER(ads.brand) LIKE :brand", {
      brand: `%${filterObj.brand.toLowerCase()}%`,
    });
  }

  const adsLength = await query.getCount();
  const perPage = 12;
  const maxItens = adsLength;
  const pageMax = maxItens / perPage;

  if (!page || page < 1) {
    page = 1;
  }

  if (pageMax < page) {
    page = Math.ceil(pageMax);
  }

  let perPageVerification = (page - 1) * perPage;
  if (perPageVerification < 0) {
    perPageVerification = 0;
  }
  const ads = await query.take(perPage).skip(perPageVerification).getMany();

  let nextPage: string | null = `/advertisement?page=${page + 1}`;
  let previousPage: string | null = `/advertisement?page=${page - 1}`;

  if (page * maxItens < page) {
    nextPage = null;
  }

  if (page == 1) {
    previousPage = null;
  }

  if (pageMax == 1) {
    nextPage = null;
  }

  if (pageMax <= page) {
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
