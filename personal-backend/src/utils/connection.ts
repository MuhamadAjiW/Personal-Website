import { MongoClient } from "mongodb";
import { DATABASE_URI } from "./config";

export class MongoDBConnection{
    static instance: MongoClient | null = null;

    static async getInstance() {
        try {
            if(MongoDBConnection.instance != null){
                return MongoDBConnection.instance;
            }

            const client = new MongoClient(DATABASE_URI);
            await client.connect();
            MongoDBConnection.instance = client;
            return MongoDBConnection.instance;

        } catch (error) {
            console.log("Failed connecting to MongoDB:");
            console.log(error);
        }
    }
}