import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../types/errors/UnauthorizedError";
import { DASH_TOKEN } from "../utils/config";
import { AuthTypes } from "../types/enums/AuthTypes";

export class AuthMiddleware {
    private checkDashKey(req: Request, res: Response, next: NextFunction, token: string) {
        return token === DASH_TOKEN;
    }

    authenticate(authType: AuthTypes) {
        return async (req: Request, res: Response, next: NextFunction) => {
            const token = req.header("API-KEY");
            if (!token){
                throw new UnauthorizedError("No token provided");
            }
            
            let success: boolean = false;

            switch (authType) {
                case AuthTypes.DASHONLY:
                    success = this.checkDashKey(req, res, next, token);
                    break;
                default:
                    throw new Error("Bad authentication");
            }

            if (success){
                next();
            }
            else{
                throw new UnauthorizedError("Bad token");
            }
        }
    }    
}