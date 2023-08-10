import { Router } from "express";
import controllers from "../controllers";

const filter = Router();

filter.get("", controllers.getAllFilters);


export default filter;
