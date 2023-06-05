import Author from "../models/Author.js";
import CrudRepository from "./Crud-Repository.js";

class AuthorRepository extends CrudRepository{
    constructor(){
        super(Author)
    }
}

export default AuthorRepository;