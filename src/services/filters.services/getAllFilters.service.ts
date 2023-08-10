import { Repository } from "typeorm";
import { Advertisement } from "../../entities/Advertisement.entitie";
import repositories from "../../utils/respositorys";

const advertisementRepo: Repository<Advertisement> = repositories.advertisement;
const getFilters = async () => {
    const minPrice = await getMinPrice();
    const maxPrice = await getMaxPrice();
    const maxKm = await getMaxKm();
    const distinctBrands = await getDistinctBrands();
    const distinctColors = await getDistinctColors();
    const distinctYears = await getDistinctYears();
    const distinctModels = await getDistinctModels();

    const fuel = {
        flex: "Gasolina / Etanol",
        hybrid: "Gasolina / Elétrico",
        electric: "Elétrico"
    }
    return { minPrice, maxPrice, distinctBrands, distinctColors, distinctYears, maxKm, distinctModels,fuel }
}
async function getMaxPrice() {
    const result = await advertisementRepo
        .createQueryBuilder("ads")
        .select("MAX(ads.Price)", "maxPrice")
        .getRawOne();

    return result.maxPrice;
}
async function getMaxKm() {
    const result = await advertisementRepo
        .createQueryBuilder("ads")
        .select("MAX(ads.km)", "maxKm")
        .getRawOne();

    return result.maxKm;
}

async function getMinPrice() {
    const result = await advertisementRepo
        .createQueryBuilder("ads")
        .select("MIN(ads.Price)", "minPrice")
        .getRawOne();

    return result.minPrice;
}

async function getDistinctModels() {
    const results = await advertisementRepo
        .createQueryBuilder("ads")
        .select("DISTINCT ads.modelCar", "models")
        .getRawMany();

    const distinctModels = results.map(result => result.models);
    return distinctModels;
}
async function getDistinctBrands() {
    const results = await advertisementRepo
        .createQueryBuilder("ads")
        .select("DISTINCT ads.brand", "brand")
        .getRawMany();

    const distinctBrands = results.map(result => result.brand);
    return distinctBrands;
}
async function getDistinctYears() {
    const results = await advertisementRepo
        .createQueryBuilder("ads")
        .select("DISTINCT ads.year", "year")
        .getRawMany();

    const distinctYears = results.map(result => result.year);
    return distinctYears;
}
async function getDistinctColors() {
    const results = await advertisementRepo
        .createQueryBuilder("ads")
        .select("DISTINCT ads.color", "color")
        .getRawMany();

    const distinctColors = results.map(result => result.color);
    return distinctColors;
}


export { getFilters }