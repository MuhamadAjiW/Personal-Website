import { Express, Request, Response } from "express";
import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from "./utils/config";
import { badRequestErrorHandler, conflictErrorHandler, generalErrorHandler, notFoundErrorHandler, unauthorizedErrorHandler } from './middlewares/error-middleware';
import bodyParser from "body-parser";

require("express-async-errors")

export class App{
    server: Express;

    constructor(){
        this.server = express();
        this.server.get('/', (req: Request, res: Response) => {
            res.send(`Server setup at ${SERVER_PORT}`);
        });

        this.server.use(
            cors(),
            bodyParser.json(),
            express.json(),
            express.urlencoded({ extended: true }),
            notFoundErrorHandler,
            conflictErrorHandler,
            badRequestErrorHandler,
            unauthorizedErrorHandler,
            generalErrorHandler
        )
    }

    run () {
        process.on("uncaughtException", (error) =>{
            console.error("Server encountered an uncaught error: ", error);
            console.log("\n\nServer continues running");
        })

        this.server.listen(SERVER_PORT, () =>{
            console.log(`Server setup at ${SERVER_PORT}`);
        });
    }
}


