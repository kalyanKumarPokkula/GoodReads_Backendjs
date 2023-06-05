import AuthorRepository from "../repositorys/author-repository.js";
import ValidationError from "../utils/errorhandling/validate-error.js";

export class AuthorService{
    constructor(){
        this.authorRepository = new AuthorRepository();
    }

    create = async (data) => {
        try {
            let author = await this.authorRepository.create(data);
            return author;
        } catch (error) {
            console.log("Something went wrong in the User service layer");
            if(error.name == "ValidationError"){
                throw new ValidationError(error);
            }
            throw error;
        }
    }

    getAll = async () => {
        try {
            let authors = await this.authorRepository.getAll();
            return authors;
        } catch (error) {
            console.log("Something went wrong in the User service layer");
            throw error;
        }
    }
}