import { z } from 'zod';

export const Message = z.object({
    timestamp: z.date(),
    content: z.string().max(4096)
});
export type Message = z.infer<typeof Message>