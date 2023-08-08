import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import {
    TAdvertisement
} from "../../interfaces/advertisement.interfaces";
import repositories from "../../utils/respositorys";
import { AppError } from "../../errors";
import { log } from "console";





export const advertisementGetService = async (adsId: number): Promise<TAdvertisement> => {
    
    const advertisementRepo: Repository<Advertisement> = repositories.advertisement;
    const ads = await advertisementRepo.createQueryBuilder('ads')
        .innerJoin('ads.user', 'user')
        .addSelect('user.name')
        .addSelect('user.id')
        .where('ads.id = :userId', { userId: adsId })
        .getOne();

    if (!ads) {
        throw new AppError("Advertisement not found", 404);
    }

    return ads;
}