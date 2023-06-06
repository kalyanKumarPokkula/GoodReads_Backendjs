import Logger from "../config/logger/index.js";
import CommentOnReview from "../models/CommentOnReview.js";
import CrudRepository from "./Crud-Repository.js";

class CommentOnReviewRepository extends CrudRepository{
    constructor(){
        super(CommentOnReview);
    }

    findByReviewId = async (reviewId) => {
        try {
            let reponses = await CommentOnReview.find({reviewId : reviewId});
            return reponses
        } catch (error) {
            Logger.error("Something went wrong in the CommentOnReview : findByReviewID");
            throw error;
        }
    }
}

export default CommentOnReviewRepository;