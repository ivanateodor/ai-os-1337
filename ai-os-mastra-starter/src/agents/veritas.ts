import { VERITAS_SYSTEM } from '../prompts/veritas.js';
import { fetch_guest_kit } from '../tools/fetchGuestKit.js';

type VeritasInput = { question: string; guestId: string };
export async function veritasAsk({ question, guestId }: VeritasInput) {
  const kit = await fetch_guest_kit({ guestId });
  // Here you'd call your LLM with VERITAS_SYSTEM + {question, kit}
  // For MVP, synthesize a reactive follow-up:
  const q = question.trim();
  const followup = q.endsWith('?') ? q : `You mentioned ${q}. Can you unpack the turning point in that story?`;

  return {
    agent: 'veritas',
    kit,
    answer: followup
  };
}
