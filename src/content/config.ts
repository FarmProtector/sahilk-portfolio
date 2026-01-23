import { z, defineCollection } from "astro:content";

// 1. Define the Blog Schema (Existing)
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

// 2. Define the Store Schema (Existing)
const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

// 3. Define the Project Schema (New)
const projectsSchema = z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    status: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    custom_link: z.string().optional(),
});

// Export types for use in other files
export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectsSchema>;

// Initialize the Collections
const blogCollection = defineCollection({ type: 'content', schema: blogSchema });
const storeCollection = defineCollection({ type: 'content', schema: storeSchema });
const projectsCollection = defineCollection({ type: 'content', schema: projectsSchema });

// 4. Export ALL collections in ONE object (This fixes the error)
export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'projects': projectsCollection,
};