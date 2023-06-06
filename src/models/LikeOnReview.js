import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    reviewId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'BookReview'
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
} , {timestamps : true});


const LikeOnReview = mongoose.model('LikeReview' , likeSchema);

export default LikeOnReview;