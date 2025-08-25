import { TREND_SYSTEM } from '../prompts/trend.js';
import { search_social } from '../tools/searchSocial.js';

type TrendInput = { topic: string };
export async function trendBrief({ topic }: TrendInput) {
  const feeds = await search_social({ topic, window: '48h' });
  // Here you'd call your LLM with TREND_SYSTEM + {feeds}
  // For MVP, return a deterministic report structure:
  const signal = feeds.volume > 60 ? '🔥' : feeds.volume > 20 ? '⚠️' : '💤';
  const summary = `Buzz on "${topic}" is ${feeds.volume} with rising velocity ${feeds.velocity}. Sentiment tilts positive.`;
  const action = `Draft a 2-min clip + thread; invite counter-data from community; set alert for next 24h.`;
  const invite = `Agree? Disagree? Challenge my call with links or screenshots.`;

  return {
    agent: 'trend',
    report: { signal, summary, action, invite },
    raw: feeds
  };
}
