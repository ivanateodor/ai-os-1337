import { Router } from 'express';
import { motherAsk } from '../agents/mother.js';
import { veritasAsk } from '../agents/veritas.js';
import { trendBrief } from '../agents/trend.js';

export const router = Router();

// Mother AI — main entry
router.post('/ask', async (req, res) => {
  const input: string = req.body?.input ?? '';
  const result = await motherAsk({ input });
  res.json(result);
});

// Direct agent endpoints (handy for testing)
router.post('/agents/veritas', async (req, res) => {
  const { question, guestId } = req.body ?? {};
  const result = await veritasAsk({ question, guestId });
  res.json(result);
});

router.post('/agents/trend', async (req, res) => {
  const { topic } = req.body ?? {};
  const result = await trendBrief({ topic });
  res.json(result);
});
