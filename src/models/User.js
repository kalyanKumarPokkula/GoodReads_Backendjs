import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../config/server-config.js";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        lowerCase : true,
        required : [true , "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        uniqueCaseInsensitive: true,
        index : {
            unique : true
        }

    },

    password : {
        type : String,
        required : [true , "can't be blank"],
        minLength : [3 , 'Password cannot be less than 3 characters']
    },

    username : {
        type: String,
        lowercase: true,
        uniqueCaseInsensitive: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: {
            unique: true
        }
    }
} , {timestamps : true});

userSchema.plugin(mongooseUniqueValidator, {message: 'is already taken'});

userSchema.pre("save" , function (next){
    let user = this;
    let SALT = bcrypt.genSaltSync(9);
    let hashPassword = bcrypt.hashSync(user.password, SALT);
    user.password = hashPassword;
    next();

})

userSchema.methods.generateJwt = function jwt(){
    return Jwt.sign({
        id : this._id,
        email : this.email
      }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password , this.password);
}

const User = mongoose.model('User' ,userSchema);

export default User;

