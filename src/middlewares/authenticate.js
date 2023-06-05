import passport from "passport";
import { StatusCodes } from "http-status-codes";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";

export const authenticate =  async (req ,res, next) => {
     passport.authenticate('jwt' , (err , user ,data) => {
        if(err) next();

        if(!user){
            return res.status(401).json({
                message : "Unauthorised access",
                success : false
            })
        }

        req.user = user;
        next();
     })(req ,res ,next)
}

export const signUp_Middleware = async (req ,res ,next) => {
    if(!req.body.email){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse({
                    explanation: 'email of the user is not preent'
                }))
    }

    if(!req.body.password){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse({
                    explanation : 'password of the use is not preent'
                }))
    }

    if(!req.body.username){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse({
                    explanation : "name of the use is not preent"
                }));
    }

    next();
}

export const signIn_middleware = async (req , res , next) => {
    if(!req.body.email){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse({
                    explanation : "email of the user is not preent"
                }))
    }

    if(!req.body.password){
        return res
                .status(StatusCodes.BAD_GATEWAY)
                .json(InternalServerErrorResponse({
                    explanation : "password of the user is not preent"
                }))
    }

    next();
}