import repositories from "../../utils/respositorys";

const deleteUser = async (userId: number) => {
  await repositories.user.softDelete({
    id: userId,
  });
};

export default deleteUser;
