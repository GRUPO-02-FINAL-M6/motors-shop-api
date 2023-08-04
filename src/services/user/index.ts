import createUser from "./createUser.service";
import findAllUsers from "./findAllUsers.service";
import login from "./login.service";

const userServices = { createUser, findAllUsers, login };

export default userServices;
