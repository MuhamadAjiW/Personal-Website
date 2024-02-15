import { z } from 'zod';

export const MessageRequest = z.object({
    content: z.string()
});
export type MessageRequest = z.infer<typeof MessageRequest>