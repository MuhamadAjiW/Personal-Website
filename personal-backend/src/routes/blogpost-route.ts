import { Router } from "express";
import { MessageController } from "../controllers/message-controller";
import { Route } from "../types/interfaces/Route";
import { AuthMiddleware } from "../middlewares/auth-middleware";
import { AuthTypes } from "../types/enums/AuthTypes";
import { limiterMiddleware } from "../middlewares/limiter-middleware";
import { BlogpostController } from "../controllers/blogpost-controller";

export class BlogpostRoute implements Route {
    blogpostController: BlogpostController;
    authMiddleware: AuthMiddleware;

    constructor(){
        this.blogpostController = new BlogpostController();
        this.authMiddleware = new AuthMiddleware();
    }

    getRoutes(): Router{
        return Router()
            .post('/api/blogpost',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.blogpostController.post())
            .get('/api/blogpost',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.blogpostController.get())
            .delete('/api/blogpost',
                this.authMiddleware.authenticate(AuthTypes.DASHONLY),
                this.blogpostController.delete());
    }
}