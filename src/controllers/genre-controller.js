import { StatusCodes } from "http-status-codes";
import GenreService from "../services/genre-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";

const genreService = new GenreService();

const create = async (req ,res) =>{
    try {
        let data = await genreService.create(req.body);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully created genre",
                    success : true,
                    data : data,
                    err : {}
                });
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}


const getAll = async (req ,res) => {
    try {
        let data = await genreService.getAll();
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully created genre",
                    success : true,
                    data : data,
                    err : {}
                });
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}

const getByName = async (req ,res) => {
    try {
        console.log(req.params);
        let data = await genreService.getByName(req.params.name);
        return data;
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}


export default {
    getAll,
    create,
    getByName
}