import { Repository } from "typeorm";
import repositories from "../../utils/respositorys";
import { AppError } from "../../errors";
import { CommentAds } from "../../entities/Comment.entity";

export const CommentDeleteService = async (commentID: number, userId: number) => {

    const commentRepo: Repository<CommentAds> = repositories.comment;

    const commentForDelete = await commentRepo.createQueryBuilder("comment").where("comment.id = :commentID", { commentID }).andWhere("comment.userId = :userId", { userId }).getOne();
    
    if (!commentForDelete) {
        throw new AppError("Unauthorized", 401);
    }
    await commentRepo.remove(commentForDelete);

    return true;
}