import { Request, Response } from "express";
import { MessageRepository } from "../repository/message-repository";
import { Message } from "../types/Message";
import { MessageRequest } from "../types/MessageRequest";
import { StatusCodes } from "http-status-codes";

export class MessageController{
    private messageRepository: MessageRepository;

    constructor(){
        this.messageRepository = new MessageRepository();
    }

    post(){
        return async(req: Request, res: Response) => {
            const requestData = MessageRequest.parse(req.body);
            
            const currentTime = new Date();
            const message = Message.parse({
                timestamp: currentTime,
                content: requestData.content
            })

            const result = this.messageRepository.create(message);

            res.status(StatusCodes.CREATED).json({
                message: "Message Received",
                valid: true,
                data: result
            })

            console.log(`[${currentTime}] New message received: ${message.content}`);
        }
    }
}