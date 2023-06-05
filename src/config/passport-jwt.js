import JWT from "passport-jwt";
import User from "../models/User.js";
import { JWT_SECRET } from "./server-config.js";

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;


const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : JWT_SECRET
}


export const passportAuth = (passport) => {
   try {
    passport.use(new JwtStrategy(opts , async (jwt_payload ,done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user){
            done(null , false);
        }else{
            done(null , user);
        }
    }));
   } catch (error) {
        console.log(error);
        throw error;
   }
}