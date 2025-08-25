import { MOTHER_SYSTEM } from '../prompts/mother.js';
import { veritasAsk } from './veritas.js';
import { trendBrief } from './trend.js';

function looksInterview(text: string) {
  const t = text.toLowerCase();
  return /(interview|guest|episode|follow-?up|question|podcast)/.test(t);
}
function looksTrend(text: string) {
  const t = text.toLowerCase();
  return /(trend|trending|what.*next|signal|vir(al|ality)|meme|topic|hype)/.test(t);
}

export async function motherAsk({ input }: { input: string }) {
  const system = MOTHER_SYSTEM; // reserved for future LLM use
  let route: 'veritas'|'trend'|'clarify' = 'clarify';

  if (looksInterview(input)) route = 'veritas';
  else if (looksTrend(input)) route = 'trend';
  else route = 'clarify';

  if (route === 'clarify') {
    return { route, answer: "Quick clarifier: is this about an interview (guest/questions) or a trend analysis?" };
  }
  if (route === 'veritas') {
    const answer = await veritasAsk({ question: input, guestId: 'guest-unknown' });
    return { route, ...answer };
  } else {
    const answer = await trendBrief({ topic: input });
    return { route, ...answer };
  }
}
