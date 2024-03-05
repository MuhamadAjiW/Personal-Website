import { Request, Response } from "express";
import { MessageRepository } from "../repository/message-repository";
import { Message } from "../types/db/message/Message";
import { MessagePostReq } from "../types/db/message/MessagePostReq";
import { StatusCodes } from "http-status-codes";
import { MessageFetchReq } from "../types/db/message/MessageFetchReq";
import { BadRequestError } from "../types/errors/BadRequestError";
import { MessageDeleteReq } from "../types/db/message/MessageDeleteReq";
import { MessageIdReq } from "../types/db/message/MessageIdReq";

export class BlogpostController{
    post(){
        return async(req: Request, res: Response) => {

        }
    }

    get(){
        return async(req: Request, res: Response) => {

        }
    }

    delete(){
        return async(req: Request, res: Response) => {

        }
    }
}