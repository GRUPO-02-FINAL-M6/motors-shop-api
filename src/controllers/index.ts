import ads from "./advertisement.controller";
import { getAllFilters } from "./filter.controller";
import users from "./users.controller";
import { changePass } from "./recovery.controller";
const controllers = {
  users,
  ads,
  getAllFilters,
  changePass
};

export default controllers;
