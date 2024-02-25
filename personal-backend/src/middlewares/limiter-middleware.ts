import { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import { StatusCodes } from "http-status-codes";

export const limiterMiddleware = rateLimit({
    windowMs: 5 * 60 * 1000, // 1 minutes
    max: 20,
    handler: (req: Request, res: Response) => {
        return res.status(StatusCodes.TOO_MANY_REQUESTS).json({
            message: "Too many requests, please try again in 5 minutes.",
            valid: false,
            data: null
        });
      },
});