import BookRepository from "../repositorys/book-repository.js";
import AuthorRepository from "../repositorys/author-repository.js";
import GenreRepository from "../repositorys/genre-repository.js";

class BookService{
    constructor(){
        this.bookRepository = new BookRepository();
        this.authorRepository = new AuthorRepository();
        this.genreRepository = new GenreRepository();
    }

    create = async (data) => {
        try {
            let book = await this.bookRepository.create(data);
            let author = await this.authorRepository.get(data.author);
            let genre = await this.genreRepository.get(data.genres);
            genre.books.push(book._id);
            genre.save();
            author.books.push(book._id);
            author.save();
            return book;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    getAll = async () => {
        try {
            let books = await this.bookRepository.getAll();
            return books;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    getById = async (data) => {
        try {
            let book = await this.bookRepository.get(data);
            return book;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

export default BookService;