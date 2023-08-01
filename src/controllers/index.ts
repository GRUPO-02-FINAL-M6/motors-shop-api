import users from "./users.controller";
import posts from "./posts.controller";
import likes from "./likes.controller";
import comments from "./comments.controller";

const controllers = {
    ...users,
    ...posts,
    ...likes,
    ...comments
}

export default controllers