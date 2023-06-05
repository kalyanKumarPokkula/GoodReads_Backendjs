
import UserRepository from "../repositorys/user-repository.js";
import ClientError from "../utils/errorhandling/client-error.js";
import ValidationError from "../utils/errorhandling/validate-error.js";



export default class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    create = async (data) => {
        try {
            let user = await this.userRepository.create(data); 
            return user;
        } catch (error) {
            console.log("Something went wrong in the User service layer");
            if(error.name == "ValidationError"){
                throw new ValidationError(error);
            }
            throw error;
        }
    }

    signin = async(email , password)=> {
        try {
            let user = await this.userRepository.findByEmail(email);
            if(!user){
                throw new ClientError("Invalid User" , "We're sorry, but the user you're trying to reach does not exist in our records");
            }

            if(!user.comparePassword(password)){
                console.log("Invalid password");
                throw new ClientError("Invalid password" , "The password User entered doesn't match the password ");
            }

            const token = user.generateJwt();
            return token;
        } catch (error) {
            console.log('Something went wrong in the User service layer');
            throw error;
        }
    }
    


}