import { z } from 'zod';

export const MessagePostReq = z.object({
    from: z.string().max(512),
    content: z.string()
});
export type MessagePostReq = z.infer<typeof MessagePostReq>