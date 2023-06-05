import Logger from "../config/logger/index.js";
import Genre from "../models/Genre.js";
import CrudRepository from "../repositorys/Crud-Repository.js";

class GenreRepository extends CrudRepository{
    constructor(){
        super(Genre);
    }

    getByName = async (data) =>{
        try {
           let genre = await Genre.find(data).exec();
           return genre; 
        } catch (error) {
            Logger.error("Something went wrong in the Genre Repo : getByName");
            throw error;
        }
    }


}


export default GenreRepository;