import Book from "../models/Book.js";
import CrudRepository from "./Crud-Repository.js";

class BookRepository extends CrudRepository{
    constructor(){
        super(Book);
    }
}

export default BookRepository;