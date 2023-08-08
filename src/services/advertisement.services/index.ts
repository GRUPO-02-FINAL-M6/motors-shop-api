import { advertisementCreateService } from "./advertisementCreate.service";
import { advertisementDeleteService } from "./advertisementDelete.service";
import { advertisementGetService } from "./advertisementGet.service";
import { advertisementGetAllService } from "./advertisementGetAll.service";
import { advertisementUpdateService } from "./advertisementUpdate.service";

export const advertisementServices = {
    advertisementCreateService,
    advertisementUpdateService,
    advertisementDeleteService,
    advertisementGetAllService,
    advertisementGetService,
}