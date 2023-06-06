import { StatusCodes } from "http-status-codes";

const  bookMiddleware = (req ,res ,next) =>  {
    if(
        !req.body.title && 
        !req.body.author && 
        !req.body.description && 
        !req.body.genres &&
        !req.body.pages &&
        !req.body.publishDate

        ){
            return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json({
                        message : "Provide all required fields in request body"
                    })
        }
        next();
}

export default {
    bookMiddleware
}