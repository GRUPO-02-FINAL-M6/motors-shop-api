import { Request, Response } from "express";
import { getFilters } from "../services/filters.services/getAllFilters.service";

const getAllFilters = async (req: Request, res: Response): Promise<Response> => {
    const filters = await getFilters();
    return res.status(200).json(filters);
};


export {
    getAllFilters
}