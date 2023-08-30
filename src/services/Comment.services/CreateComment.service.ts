import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import repositories from "../../utils/respositorys";
import { AppError } from "../../errors";
import { TComment } from "../../interfaces/advertisement.interfaces";
import { CommentAds } from "../../entities/Comment.entity";
import { Advertisement } from "../../entities/Advertisement.entitie";
import advertisementSchema from "../../schemas/advertisementSchema";

export const CommentCreateService = async (comment: string, userId: number, postId: number) : Promise<TComment> => {

    const usersRepo: Repository<User> = repositories.user;
    const adsRepo: Repository<Advertisement> = repositories.advertisement;
    const commentRepo: Repository<CommentAds> = repositories.comment;

    const user = await usersRepo.findOneBy({ id: userId })
    const ads = await adsRepo.findOneBy({ id: postId });
    if (!user) {
        throw new AppError("user not found", 404);
    }
    if (!ads) {
        throw new AppError("Advertisement not found", 404);
    }

    const newComment = new CommentAds();

    newComment.user = user;
    newComment.description = comment;
    newComment.advertisement = ads;

    const createComment = commentRepo.create(newComment);
    
    const saveComment = await commentRepo.save(createComment);
    
    return advertisementSchema.CommentAds.parse({...saveComment,advertismentId: saveComment.id});
}