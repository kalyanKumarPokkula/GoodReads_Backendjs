import mongoose from "mongoose";

const userBookingRatingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true , "can't be blank"]
    },
    bookId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book",
        required : [true , "can't be blank"]
    },
    rating : {
        type : Number,
        required : true,
        max : 5
    }
}, {timestamps : true});


let UserBookingRating = mongoose.model('UserReview', userBookingRatingSchema);

export default UserBookingRating;