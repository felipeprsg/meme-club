import type { NextApiRequest, NextApiResponse } from 'next';

import { z } from 'zod';

const BodySchema = z.object({
  name: z.string(),
});

type RequestBody = z.infer<typeof BodySchema>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method not allowed');
  }

  const validationResult = BodySchema.safeParse(req.body);

  if (!validationResult.success) {
    return res.status(400).json({
      error: 'Invalid request body',
      message: validationResult.error.issues,
    });
  }

  const { name }: RequestBody = validationResult.data;

  return res.status(200).json({ name });
}
