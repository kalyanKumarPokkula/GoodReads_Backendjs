import { StatusCodes } from "http-status-codes";
import { AuthorService } from "../services/author-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";

const authorService = new AuthorService();

const create = async (req ,res) => {
    try {
        let data = await authorService.create(req.body);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully created a author",
                    description : "Success",
                    err : {},
                    data : data
                })
    } catch (error) {
        if(error.statusCodes){
            return res
                    .status(error.statusCodes)
                    .json(InternalServerErrorResponse(error))
        }

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error))

    }
}

const getAll = async (req ,res) => {
    try {
       let data = await authorService.getAll();
       return res
                .status(StatusCodes.ACCEPTED)
                .json({
                    message : "Successfully created a author",
                    description : "Success",
                    err : {},
                    data : data
                })
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error))
    }
}

export default  {
    create,
    getAll
}

