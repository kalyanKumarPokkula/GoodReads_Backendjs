import Logger from "../config/logger/index.js";
import LikeOnReview from "../models/LikeOnReview.js";
import CrudRepository from './Crud-Repository.js';

export default class LikeOnReviewRepository extends CrudRepository{
    constructor(){
        super(LikeOnReview);
    }

    findByUserId = async(userId) => {
        try {
            let response = await LikeOnReview.find({userId :userId});
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the LikeOnReviewRepo : findByUserId");
            throw error;
        }
    }
}