import LikeOnReviewRepository from "../repositorys/likeOnReview-repository.js";
import BookReview from "../repositorys/bookReview-repository.js";

export default class LikeOnReviewService{
    constructor(){
        this.likeOnReviewRepository = new LikeOnReviewRepository();
        this.bookReview = new BookReview();
    }


    toggleLike = async(data) => {
        try {
            let exists = await this.likeOnReviewRepository.findByUserId(data.userId);
            let bookReview = await this.bookReview.get(reviewId);
            if(exists){
                bookReview.likes.pull(exists.id);
                await bookReview.save();
                exists.remove();
                var isAdded = false;
            }
            else{
                let response = await this.likeOnReviewRepository.create(data);
                bookReview.likes.push(response);
                await bookReview.save();
                var isAdded = true;
            }

            return isAdded;

        } catch (error) {
            console.log("Something went wrong in the LikeOnReview Service");
            throw error;
        }
    }


}