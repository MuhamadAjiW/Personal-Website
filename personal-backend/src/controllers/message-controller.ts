import { Request, Response } from "express";
import { MessageRepository } from "../repository/message-repository";
import { Message } from "../types/Message";
import { MessagePostReq } from "../types/MessagePostReq";
import { StatusCodes } from "http-status-codes";
import { MessageFetchReq } from "../types/MessageFetchReq";
import { BadRequestError } from "../types/errors/BadRequestError";
import { MessageDeleteReq } from "../types/MessageDeleteReq";
import { MessageIdReq } from "../types/MessageIdReq";

export class MessageController{
    private messageRepository: MessageRepository;

    constructor(){
        this.messageRepository = new MessageRepository();
    }

    post(){
        return async(req: Request, res: Response) => {
            const requestCheck = MessagePostReq.safeParse(req.body);
            if(!requestCheck.success) throw new BadRequestError("Bad message")
            
            const requestData = requestCheck.data;

            const currentTime = new Date();
            const message = Message.parse({
                timestamp: currentTime,
                from: requestData.from,
                content: requestData.content
            })

            const result = await this.messageRepository.create(message);

            res.status(StatusCodes.CREATED).json({
                message: "Message Received",
                valid: true,
                data: message
            })

            console.log(`[${currentTime}] New message received: ${message.content}`);
        }
    }

    get(){
        return async(req: Request, res: Response) => {
            const requestCheck = MessageFetchReq.safeParse({
                asc: req.query.asc === "true",
                amount: req.query.amount? parseInt(req.query.amount as string) : undefined,
                startDate: req.query.startDate? new Date(req.query.startDate as string) : undefined,
                endDate: req.query.endDate? new Date(req.query.endDate as string) : undefined
            });
            if(!requestCheck.success) throw new BadRequestError("Bad query"); 


            const requestData = requestCheck.data;

            const currentTime = new Date();
            const result = await this.messageRepository.get(
                requestData.asc,
                requestData.amount,
                requestData.startDate,
                requestData.endDate
            );

            res.status(StatusCodes.OK).json({
                message: "Message Received",
                valid: true,
                data: result
            })
            
            console.log(`[${currentTime}] Messages fetched: ${result.length}`);
        }
    }

    delete(){
        return async(req: Request, res: Response) => {
            const requestCheck = MessageDeleteReq.safeParse({
                startDate: new Date(req.query.startDate as string),
                endDate: new Date(req.query.endDate as string)
            });
            if(requestCheck.success){
                const requestData = requestCheck.data;
        
                const currentTime = new Date();
                const result = await this.messageRepository.delete(
                    requestData.startDate,
                    requestData.endDate
                );
        
                res.status(StatusCodes.OK).json({
                    message: "Message Received",
                    valid: true,
                    data: result
                })
                
                console.log(`[${currentTime}] Messages deleted: ${result.deletedCount}`);

                return;
            }

            const requestCheckId = MessageIdReq.safeParse(req.query);
            if(requestCheckId.success){
                const requestData = requestCheckId.data;
        
                const currentTime = new Date();
                const result = await this.messageRepository.deleteById(
                    requestData.id
                );
        
                res.status(StatusCodes.OK).json({
                    message: "Message Received",
                    valid: true,
                    data: result
                })
                
                console.log(`[${currentTime}] Messages deleted: ${result.deletedCount}`);

                return;
            }
        }
    }
}