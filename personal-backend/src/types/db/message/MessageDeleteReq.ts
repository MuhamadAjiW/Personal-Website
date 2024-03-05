import { z } from 'zod';

export const MessageDeleteReq = z.object({
    startDate: z.date(),
    endDate: z.date()
});
export type MessageDeleteReq = z.infer<typeof MessageDeleteReq>