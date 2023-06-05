import Logger from "../config/logger/index.js";
import ClientError from "../utils/errorhandling/validate-error.js";

export default class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            let response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repository : Create');
            throw error;
        }
    }

    async delete(id){
        try {
            let response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repository : Destory');
            throw error;
        }
    }

    async get(id){
        try {
            let response = await this.model.findById(id);
            if(!response){
                return new ClientError({
                    message : "Invalid date sent from a client",
                    explanation : "NO resources found for the given Id"
                })
            }
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repository : Get');
            throw error;
        }
    }

    async getAll(){
        try {
            let response = await this.model.find({});
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repository : Get All');
            throw error;
        }
    }

    async update(id , data){
        try {
            let response = await this.model.findByIdAndUpdate(id , data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repository : Update');
            throw error;
        }
    }

    
}