import { Express, Request, Response } from "express";
import express from 'express';
import cors from 'cors';
import { badRequestErrorHandler, conflictErrorHandler, generalErrorHandler, notFoundErrorHandler, unauthorizedErrorHandler } from './middlewares/error-middleware';
import bodyParser from "body-parser";
import { MessageRoute } from "./routes/message-route";
import { env } from "./utils/config";

require("express-async-errors")

export class App{
    server: Express;

    constructor(){
        const messageRoute = new MessageRoute();

        this.server = express();
        this.server.set('trust proxy', 'uniquelocal')
        this.server.get('/', (req: Request, res: Response) => {
            res.send(`Server setup at ${env.SERVER_PORT}`);
        });

        this.server.use(
            cors(),
            bodyParser.json(),
            express.json(),
            express.urlencoded({ extended: true }),

            messageRoute.getRoutes(),

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

        this.server.listen(env.SERVER_PORT, () =>{
            console.log(`Server setup at ${env.SERVER_PORT}`);
        });
    }
}


