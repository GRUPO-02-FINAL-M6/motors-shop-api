import { Router } from "express";
import controllers from "../controllers";

const car = Router();

car.post("", controllers.cars.carCreate);
car.get("", controllers.cars.carReadAll);
car.get("/:id", controllers.cars.carRead);
car.patch("", controllers.cars.carUpdate);
car.delete("", controllers.cars.carDelete);

export default car;
