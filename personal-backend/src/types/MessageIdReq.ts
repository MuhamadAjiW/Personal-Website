import { z } from 'zod';

export const MessageIdReq = z.object({
    id: z.string()
});
export type MessageIdReq = z.infer<typeof MessageIdReq>