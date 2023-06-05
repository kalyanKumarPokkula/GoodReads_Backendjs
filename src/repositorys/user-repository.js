import Logger from "../config/logger/index.js";
import User from "../models/User.js";
import CrudRepository from "./Crud-Repository.js";
class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findByEmail(email){
        try {
            let user = await User.findOne({email : email});
            return user;
        } catch (error) {
            Logger.error("Something went wrong in User Repository : Get a Email");
            throw error;
        }
    }

}

export default UserRepository;