import Logger from '../config/logger/index.js';
import BookReview from '../models/BookReview.js';
import CrudRepository from './Crud-Repository.js';

export default class BookReviewRepository extends CrudRepository{
    constructor(){
        super(BookReview);
    }

    bookReviews = async (data) => {
        try {
            let books = await UserReview.find({dookId : data});
            return books;
        } catch (error) {
            Logger.error("Something went wrong in the userReview : bookReview");
            throw error;
        }
    }
}