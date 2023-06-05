import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    reviewId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'UserReview'
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
} , {timestamps : true});


const LikeReview = mongoose.model('LikeReview' , likeSchema);

export default LikeReview;