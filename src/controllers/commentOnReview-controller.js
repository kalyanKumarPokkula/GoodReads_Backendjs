import { StatusCodes } from "http-status-codes";
import CommentOnReviewService from "../services/commentOnReview-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";

const commentOnReviewService = new CommentOnReviewService();

const create = async (req, res) => {
  try {
    let bookId = req.params.bookId;
    let reviewId = req.params.reviewId;
    let body = req.body;
    let NewBody = { ...body, reviewId: reviewId };
    let data = await commentOnReviewService.create(NewBody);
    return res.status(StatusCodes.CREATED).json({
      message: "Successfully commented on review",
      success: true,
      err: {},
      data: data,
    });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(InternalServerErrorResponse(error));
  }
};

const getAllComments = async (req, res) => {
  try {
    let data = await commentOnReviewService.getAll(req.params.reviewId);
    return res.status(StatusCodes.CREATED).json({
      message: "Successfully fetched all comments on review",
      success: true,
      err: {},
      data: data,
    });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(InternalServerErrorResponse(error));
  }
};

const updateComment = async (req, res) => {
  try {
    let reviewId = req.params.reviewId;
    let commentId = req.params.commentId;
    let data = await commentOnReviewService.update(commentId, req.body);
    return res.status(StatusCodes.ACCEPTED).json({
      message: "Successfully updated a comment on review",
      success: true,
      err: {},
      data: data,
    });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(InternalServerErrorResponse(error));
  }
};

const destoryCommentOnReview = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const reviewId = req.params.reviewId;
    const commentId = req.params.commentId;
    let data = await commentOnReviewService.destory(commentId);
    return res.status(StatusCodes.OK).json({
      message: "Successfully deleted a comment on review",
      success: true,
      err: {},
      data: data,
    });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(InternalServerErrorResponse(error));
  }
};

export default {
  create,
  destoryCommentOnReview,
  updateComment,
  getAllComments,
};
