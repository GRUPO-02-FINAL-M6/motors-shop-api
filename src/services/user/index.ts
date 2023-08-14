import createUser from "./createUser.service";
import deleteUser from "./deleteUser.service";
import findAllUsers from "./findAllUsers.service";
import findUser from "./findUserProfile.service";
import login from "./login.service";

const userServices = { createUser, findAllUsers, login, findUser, deleteUser };

export default userServices;
