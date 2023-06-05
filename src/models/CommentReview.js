import mongoose from "mongoose";

const commentReviewSchema = new mongoose.Schema({
    content : {
        type : String,
        required : [true , "can't be blank"]

    },

    reviewId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "UserReview",
        required : [true , "can't be blank"]
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true , "can't be blank"]
    }




}, {timestamps : true});

const CommentReview = mongoose.model("CommentReview" , commentReviewSchema);

export default CommentReview;