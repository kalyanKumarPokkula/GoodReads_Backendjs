import { StatusCodes } from "http-status-codes";


class ClientError extends Error{
    constructor(message, explanation ,error){
        super();
        // this.name = 'ClientError',
        this.name = "Something went wrong";
        this.message = message;
        this.explanation =explanation;
        this.statusCode = StatusCodes.BAD_REQUEST;

    }
}

export default ClientError;