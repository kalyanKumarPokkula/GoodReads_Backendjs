import  GenreRepository  from "../repositorys/genre-repository.js";

class GenreService{
    constructor(){
        this.genreRepository = new GenreRepository();
    }

    create = async (data) => {
        try {
            let response = await this.genreRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    getAll = async () => {
        try {
            let response = await this.genreRepository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    getByName = async (data) => {
        try {
            let response = await this.genreRepository.getByName({name : data});
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    
}

export default GenreService;