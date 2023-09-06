import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import repositories from "../../utils/respositorys";
import { AppError } from "../../errors";
import { CommentAds } from "../../entities/Comment.entity";
import { TCommentPatchAds } from "../../interfaces/advertisement.interfaces";
import advertisementSchema from "../../schemas/advertisementSchema";

export const CommentPatchService = async (commentID: number, userId: number, newDescription: string): Promise<TCommentPatchAds> => {

    const usersRepo: Repository<User> = repositories.user;
    const commentRepo: Repository<CommentAds> = repositories.comment;

    const user = await usersRepo.findOneBy({ id: userId })
    if (!user) {
        throw new AppError("user not found", 404);
    }
    const oldComment = await commentRepo.createQueryBuilder("comment").where("comment.id = :commentID", { commentID }).andWhere("comment.userId = :userId", { userId }).getOne();
    if (!oldComment) {
        throw new AppError("Unauthorized", 401);
    }
    const newData = commentRepo.create({
        ...oldComment,
        description: newDescription
    });
    await commentRepo.save(newData);

    return advertisementSchema.CommentPatchAds.parse(newData);
}