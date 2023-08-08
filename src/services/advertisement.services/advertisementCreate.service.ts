import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import { TAdvertisement, TAdvertisementRequest } from "../../interfaces/advertisement.interfaces";
import repositories from "../../utils/respositorys";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors";
import advertisementSchema from "../../schemas/advertisementSchema";


export const advertisementCreateService = async (advertisement: TAdvertisementRequest, userId: number): Promise<TAdvertisement> => {


    const usersRepo: Repository<User> = repositories.user;

    const user = await usersRepo.findOneBy({ id: userId })
    if (!user) {
        throw new AppError("user not found", 404);
    }

    const advertisementRepo: Repository<Advertisement> = repositories.advertisement;
    const newAdvertisement = advertisementRepo.create({ ...advertisement, user });
    await advertisementRepo.save(newAdvertisement);

    return advertisementSchema.advertisement.parse({ ...newAdvertisement });
}