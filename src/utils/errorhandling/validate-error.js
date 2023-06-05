import { StatusCodes } from "http-status-codes";


class ValidationError extends Error{
    constructor(error){
        super();
        console.log("v");
        this.name = error.name;
        this.message = error.message;
        this.explanation = error._message;
        this.statusCode = (error.statusCode) ? error.statusCode : StatusCodes.BAD_REQUEST;

    }
}

export default ValidationError;