import { z } from 'zod';

export const MessageFetchReq = z.object({
    asc: z.boolean().optional(),
    amount: z.number().int().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional()
});
export type MessageFetchReq = z.infer<typeof MessageFetchReq>