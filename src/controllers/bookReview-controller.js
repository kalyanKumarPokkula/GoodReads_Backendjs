import { StatusCodes } from "http-status-codes";
import  BookReviewService  from "../services/bookReview-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";

const bookReviewService = new BookReviewService();

const create = async (req ,res) => {
    try {
        let body = {...req.body , bookId : req.params.bookId}
        let data = await bookReviewService.create(body);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully reviewed a book",
                    success : true,
                    err : {},
                    data : data
                })
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}

const destory = async (req ,res) => {
    try {
        let data = await bookReviewService.delete(req.params.reviewId);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully deleted a review",
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

const bookReviews = async (req ,res) => {
    try {
       let data = await bookReviewService.bookReviews(req.params.bookId);
       return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully fetched a bookReviews",
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

const update = async (req ,res) => {
    try {
        const bookId = req.params.bookId;
        const reviewId = req.params.reviewId;
        const updatedReview = req.body;
        let data = await bookReviewService.update(reviewId , updatedReview);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully fetched a bookReviews",
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
    create,
    bookReviews,
    update,
    destory
}