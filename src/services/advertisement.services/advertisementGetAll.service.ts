import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import { TAdvertisementResponseArray } from "../../interfaces/advertisement.interfaces";
import repositories from "../../utils/respositorys";
import advertisementSchema from "../../schemas/advertisementSchema";




export const advertisementGetAllService = async (): Promise<TAdvertisementResponseArray> => {

    const advertisementRepo: Repository<Advertisement> = repositories.advertisement;
    const ads = await advertisementRepo.createQueryBuilder('ads').innerJoin('ads.user', 'user').addSelect('user.name').getMany();

    return ads;
}