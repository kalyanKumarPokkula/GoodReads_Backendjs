import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , "can't be blank"]
    },

    author : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true , "can't be blank"],
        ref : 'Author'
    },
    description : {
        type : String,
        required : [true , "can't be blank"]
    },

    genre : [
        {
            type : mongoose.Schema.Types.ObjectId,
            required : [true , "can't be blank"],
            ref : 'Genre'
        }
    ],
    pages :{
        type : Number,
        required :true
    },

    publishDate : {
        type : String,
        required : true
    },

    rating :{
        type : Number,
        default : 0,
        max : 10
    }

} ,{
    timestamps :true
});

const Book = mongoose.model('Book' , bookSchema);

export default Book;