import  BookReviewRepository  from "../repositorys/bookReview-repository.js"

export default class BookReviewService{
    constructor(){
        this.bookReviewRepository = new BookReviewRepository();
    }


    create = async (data) => {
        try {
            
            let response = await this.bookReviewRepository.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the userReview service");
            throw error;
        }
    }

    bookReviews = async (bookId) => {
        try {
            let response = await this.bookReviewRepository.bookReviews(bookId);
            return response;
        } catch (error) {
            console.log("something went wrong in the userReview service");
            throw error;
        }
    }

    update = async (id , data) => {
        try {
            let response = await this.bookReviewRepository.update(id , data);
            return response;
        } catch (error) {
            console.log("something went wrong in the userReview service");
            throw error;
        }
    }

    delete = async (id) => {
        try {
            let response = await this.bookReviewRepository.delete(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the userReview service");
            throw error;
        }
    }
}