import { Router } from "express";
import { MessageController } from "../controllers/message-controller";
import { Route } from "../types/interfaces/Route";
import { AuthMiddleware } from "../middlewares/auth-middleware";
import { AuthTypes } from "../types/enums/AuthTypes";
import { limiterMiddleware } from "../middlewares/limiter-middleware";

export class MessageRoute implements Route{
    messageController: MessageController;
    authMiddleware: AuthMiddleware;

    constructor(){
        this.messageController = new MessageController();
        this.authMiddleware = new AuthMiddleware();
    }

    getRoutes(): Router{
        return Router()
            .post('/api/message',
                limiterMiddleware,
                this.authMiddleware.authenticate(AuthTypes.FEONLY),
                this.messageController.post())
            .get('/api/message',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.messageController.get())
            .delete('/api/message',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.messageController.delete());
    }
}