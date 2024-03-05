import { MongoDBConnection } from "../utils/connection";
import { Message } from "../types/db/message/Message";
import { Collection } from "mongodb";

export class MessageRepository{
    private collectionName: string = "Message";
    private collection!: Collection;

    private async getCollection(){
        if(this.collection){
            return this.collection;
        }

        const client = await MongoDBConnection.getInstance();
        const db = client?.db();
        if(db){
            this.collection = db?.collection(this.collectionName);
        } else{
            throw Error("Failed to connect to mongodb");
        }

        return this.collection;
    }

    async create(message: Message){
        const collection = await this.getCollection();
        const result = await collection.insertOne(message);
        return result;
    }

    async get(
        asc: boolean = true,
        amount?: number,
        startDate?: Date,
        endDate?: Date
    ){
        const collection = await this.getCollection();

        let result;
        const query = {timestamp: {}};
        if(startDate || endDate){
            if(startDate) query.timestamp = {...query.timestamp, $gte: startDate};
            if(endDate) query.timestamp = {...query.timestamp, $lt: endDate};
            result = collection.find(query);
        } else{
            result = collection.find();
        }

        result = result!.sort({ timestamp: asc? 1 : -1 })

        if (amount && amount > 0) result = result.limit(amount); 

        return result.toArray();
    }

    // Delete has to have start and end date for security reasons
    async delete(
        startDate: Date,
        endDate: Date
    ){
        const collection = await this.getCollection();

        const query = {
            timestamp: {
                $gte: startDate,
                $lte: endDate
            }
        };

        let result = await collection
            .deleteMany(query)

        return result;
    }

    async deleteById(
        id: string,
    ){
        const collection = await this.getCollection();
        const query = {id: id};

        let result = await collection
            .deleteOne(query)

        return result;
    }
}