import { Router } from "express";
import { MessageController } from "../controllers/message-controller";
import { Route } from "../types/interfaces/Route";
import { AuthMiddleware } from "../middlewares/auth-middleware";
import { AuthTypes } from "../types/enums/AuthTypes";

export class MessageRoute implements Route{
    messageController: MessageController;
    authMiddleware: AuthMiddleware;

    constructor(){
        this.messageController = new MessageController();
        this.authMiddleware = new AuthMiddleware();
    }

    getRoutes(): Router{
        return Router()
            .get('/api/message',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.messageController.get())
            .post('/api/message',
                this.authMiddleware.authenticate(AuthTypes.FEONLY),
                this.messageController.post())
            .delete('/api/message',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.messageController.delete());
    }
}