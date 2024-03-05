import { z } from 'zod';

export const Blogpost = z.object({
    timestamp: z.date(),
    title: z.string().max(128),
    content: z.string().max(8192)
});
export type Blogpost = z.infer<typeof Blogpost>