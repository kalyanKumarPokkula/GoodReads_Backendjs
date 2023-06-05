import { StatusCodes } from "http-status-codes";
import BookService from "../services/book-service.js";
import { InternalServerErrorResponse } from "../utils/comman/response-objects.js";

const bookService = new BookService();


const create = async (req ,res) => {
    try {
        let data = await bookService.create(req.body);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully created a book",
                    success : true,
                    err : {},
                    data : data
                });
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}

const get = async (req ,res) => {
    try {
        let data = await bookService.get(req.params);
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully fetched a book",
                    success : true,
                    err : {},
                    data : data
                });
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}

const getAll = async (req ,res) => {
    try {
        let data = await bookService.getAll();
        return res
                .status(StatusCodes.CREATED)
                .json({
                    message : "Successfully fetched a books",
                    success : true,
                    err : {},
                    data : data
                });
    } catch (error) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(InternalServerErrorResponse(error));
    }
}

export default {
    create,
    get,
    getAll
}