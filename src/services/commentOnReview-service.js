import CommentOnReviewRepository from "../repositorys/commentOnReview-repository.js";
import BookReviewRepository from "../repositorys/bookReview-repository.js";

class CommentOnReviewService{
    constructor(){
        this.commentOnReviewRepository = new CommentOnReviewRepository(); 
        this.bookReviewRepository = new BookReviewRepository();
    }

    create = async(data) =>{
        try {
            let response = await this.commentOnReviewRepository.create(data);
            let bookReview = await this.bookReviewRepository.get(data.reviewId);
            bookReview.comments.push(response._id);
            bookReview.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in the commentOnReview service layer");
            throw error;
        }
    }

    getAll = async(reviewId) => {
        try {
            let response = await this.commentOnReviewRepository.findByReviewId(reviewId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the commentOnReview service layer");
            throw error;
        }
    }

    update = async (commentId , updateDate) => {
        try {
            let response = await this.commentOnReviewRepository.update(commentId , updateDate);
            return response;
        } catch (error) {
            console.log("Something went wrong in the commentOnReview service layer");
            throw error;
        }
    }

    destory = async (CommentId) => {
        try {
            let response = await this.commentOnReviewRepository.delete(CommentId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the commentOnReview service layer");
            throw error;
        }
    }
}

export default CommentOnReviewService;