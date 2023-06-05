import {StatusCodes} from 'http-status-codes';

import UserService from '../services/user-service.js';
import { InternalServerErrorResponse , CustomErrorResponse} from "../utils/comman/response-objects.js";
import { UserController } from './index.js';

const userService = new UserService();

const signup = async (req ,res) => {
    try {
       
        let user = await userService.create(req.body);
        return res.status(201).json({
            message : "Successfully created a user",
            description : "Success",
            err : {},
            data : user
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(InternalServerErrorResponse(error));
    }
}

const signin = async (req ,res) => {
    try {
        let token = await userService.signin(req.body.email , req.body.password);
        return res.status(200).json({
            message : "Successfully logged in",
            description : "Success",
            err : {},
            data : token
        });
    } catch (error) {
        console.log(error);
        if(error.statusCode) {
            return res
                    .status(error.statusCode)
                    .json(CustomErrorResponse(error));
        }
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(InternalServerErrorResponse(error));
    }
}


export default  {
    signup,
    signin
}