import { z } from 'zod';

export const Message = z.object({
    timestamp: z.date(),
    from: z.string().max(128),
    content: z.string().max(2048)
});
export type Message = z.infer<typeof Message>