import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const authorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Can't be blank"],
        lowercase: true,
        uniqueCaseInsensitive: true,
        index: {
            unique: true
        }
    },
    books :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book"
    }]
}, {timestamps : true});

authorSchema.plugin(mongooseUniqueValidator, {message: 'is already taken'});

const Author = mongoose.model('Author' , authorSchema);

export default Author;