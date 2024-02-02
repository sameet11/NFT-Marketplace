import { z } from "zod";
export const emailSchema = z.string().email();

export const userSchema = z.object({
    avatar_url: z.string().nullable(),
    Balance: z.number(),
    full_name: z.string().nullable(),
    id: z.string(),
    updated_at: z.string().nullable(),
    username: z.string().nullable(),
    website: z.string().nullable(),
});

export const NFTSchema = z.object({
    Benefits: z.string().array().nullable(),
    created_at: z.string(),
    id: z.string(),
    image_url: z.string(),
    price: z.number().nullable(),
    Title: z.string().nullable(),
    user_id: z.string().nullable(),
})

export type NFT = z.infer<typeof NFTSchema>;
export type User = z.infer<typeof userSchema>;
export type email = z.infer<typeof emailSchema>;