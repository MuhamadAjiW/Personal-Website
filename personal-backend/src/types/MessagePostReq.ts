import { z } from 'zod';

export const MessagePostReq = z.object({
    from: z.string().max(128),
    content: z.string().max(2048)
});
export type MessagePostReq = z.infer<typeof MessagePostReq>