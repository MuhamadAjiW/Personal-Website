import { z } from 'zod';

export const Message = z.object({
    timestamp: z.date(),
    from: z.string().max(512),
    content: z.string().max(4096)
});
export type Message = z.infer<typeof Message>