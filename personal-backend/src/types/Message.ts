import { z } from 'zod';

export const Message = z.object({
    timestamp: z.date(),
    content: z.string()
});
export type Message = z.infer<typeof Message>