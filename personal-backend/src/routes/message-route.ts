import { Router } from "express";
import { MessageController } from "../controllers/message-controller";
import { Route } from "../types/interfaces/Route";

export class MessageRoute implements Route{
    messageController: MessageController;

    constructor(){
        this.messageController = new MessageController();
    }

    getRoutes(): Router{
        return Router()
            .post('/api/message',
                this.messageController.post())
    }
}