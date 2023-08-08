import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import repositories from "../../utils/respositorys";

export const advertisementDeleteService = async (advertisementId: number) => {
    const advertisementRepo: Repository<Advertisement> = repositories.advertisement;

    await advertisementRepo.delete({ id: advertisementId })
}