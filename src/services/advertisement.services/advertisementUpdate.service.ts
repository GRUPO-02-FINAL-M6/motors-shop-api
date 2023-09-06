import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import repositories from "../../utils/respositorys";
import { TAdvertisement, TAdvertisementUpdate } from "../../interfaces/advertisement.interfaces";
import { AppError } from "../../errors";
import { Advertisement } from "../../entities/Advertisement.entitie";
import advertisementSchema from "../../schemas/advertisementSchema";

export const advertisementUpdateService = async (advertisementData: TAdvertisementUpdate, advertisementId: number, userId: number): Promise<TAdvertisement> => {
    const usersRepo: Repository<User> = repositories.user;
    const user = await usersRepo.findOneBy({ id: userId })
    if (!user) {
        throw new AppError("user not found", 404);
    }

    const advertisementRepo: Repository<Advertisement> = repositories.advertisement;
    const oldAdvertisement = await advertisementRepo.findOneBy({ id: advertisementId });
    const newData = advertisementRepo.create({
        ...oldAdvertisement,
        ...advertisementData
    });

    await advertisementRepo.save(newData);

    newData.km = Number(newData.km);
    newData.price = Number(newData.price);

    return advertisementSchema.advertisement.parse({ ...newData, user: { ...user } });
}