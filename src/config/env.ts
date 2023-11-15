import { z } from 'zod';

const envSchema = z.object({
  // Node
  NODE_ENV: z.union([z.literal('development'), z.literal('production')]),

  // Firebase
  NEXT_PUBLIC_API_KEY: z.string().nonempty(),
  NEXT_PUBLIC_AUTH_DOMAIN: z.string().nonempty(),
  NEXT_PUBLIC_PROJECT_ID: z.string().nonempty(),
  NEXT_PUBLIC_STORAGE_BUCKET: z.string().nonempty(),
  NEXT_PUBLIC_MESSAGING_SENDER_ID: z.string().nonempty(),
  NEXT_PUBLIC_APP_ID: z.string().nonempty(),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_STORAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  NEXT_PUBLIC_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID,
});
