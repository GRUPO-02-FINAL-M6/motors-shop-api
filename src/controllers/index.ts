import ads from "./advertisement.controller";
import { getAllFilters } from "./filter.controller";
import users from "./users.controller";
import { changePass } from "./recovery.controller";
import commentController from "./comment.controller";

const controllers = {
  users,
  ads,
  getAllFilters,
  changePass,
  commentController
};

export default controllers;
