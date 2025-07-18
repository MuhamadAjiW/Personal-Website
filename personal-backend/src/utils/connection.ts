import { MongoClient } from "mongodb";
import { env } from "./config";

export class MongoDBConnection{
    static instance: MongoClient | null = null;

    static async getInstance() {
        try {
            if(MongoDBConnection.instance != null){
                return MongoDBConnection.instance;
            }

            const client = new MongoClient(env.DATABASE_URI);
            await client.connect();
            MongoDBConnection.instance = client;
            return MongoDBConnection.instance;

        } catch (error) {
            console.log("Failed connecting to MongoDB:");
            console.log(error);
        }
    }
}