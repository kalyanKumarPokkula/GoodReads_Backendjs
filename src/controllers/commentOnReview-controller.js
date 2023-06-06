import { StatusCodes } from "http-status-codes";
import CommentOnReviewService from "../services/commentOnReview-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects";

const commentOnReviewService = new CommentOnReviewService();

const create = async (req ,res) => {
    try {
        let bookId = req.params.bookId;
        let reviewId = req.params.reviewId;
        let body = req.body;
        let NewBody = {...body , reviewId : reviewId};
        let data = await commentOnReviewService.create(NewBody);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully commented on review",
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