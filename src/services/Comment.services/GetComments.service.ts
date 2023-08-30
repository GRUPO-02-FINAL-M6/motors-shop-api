import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import repositories from "../../utils/respositorys";
import { AppError } from "../../errors";
import { TComment, TComments } from "../../interfaces/advertisement.interfaces";
import { CommentAds } from "../../entities/Comment.entity";
import { Advertisement } from "../../entities/Advertisement.entitie";
import advertisementSchema from "../../schemas/advertisementSchema";

export const commentGetService = async (postId: number): Promise<TComments> => {
    
    const adsRepo: Repository<Advertisement> = repositories.advertisement;
    const commentRepo: Repository<CommentAds> = repositories.comment;

    const ads = await adsRepo.findOneBy({ id: postId });
    if (!ads) {
        throw new AppError("Advertisement not found", 404);
    }

    const comments = await commentRepo.createQueryBuilder("comment").innerJoinAndSelect("comment.user", "user").where("comment.advertisementId = :idAds", { idAds: postId }).getMany();

    return advertisementSchema.CommentsAds.parse(comments);
}