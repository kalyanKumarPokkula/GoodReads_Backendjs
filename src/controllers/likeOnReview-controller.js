import { StatusCodes } from "http-status-codes";
import LikeOnReviewService from "../services/likeOnReview-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";


const likeOnReviewSerivce = new LikeOnReviewService();


const toggleLike = async (req ,res) => {
    try {
        let body = {userId :req.user.id , reviewId : req.params.reviewId};
        let data = await likeOnReviewSerivce.toggleLike(body);
        return res
                .status(StatusCodes.OK)
                .json({
                    message : "Successfully toggled like",
                    success : true,
                    err : {},
                    data : data
                });
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}

export default {
    toggleLike
}