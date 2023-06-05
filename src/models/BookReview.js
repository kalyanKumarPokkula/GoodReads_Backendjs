import mongoose from "mongoose";

const userReviewSchema = new mongoose.Schema({
    content : {
        type : String,
        required : [true ,"can't be blank"]
    },
    bookId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book",
        required :[true , "can't be blank"]
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :[true , "can't be blank"]
    },

    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Like"
        }
    ],

    comment : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ]

}, {timestamps : true});


const BookReview = mongoose.model('UserReview' ,userReviewSchema );

export default BookReview;