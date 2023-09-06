import ads from "./advertisement.controller";
import { getAllFilters } from "./filter.controller";
import users from "./users.controller";
import { sendChangePass,changePass } from "./recovery.controller";
import commentController from "./comment.controller";

const controllers = {
  users,
  ads,
  getAllFilters,
  sendChangePass,
  changePass,
  commentController
};

export default controllers;
