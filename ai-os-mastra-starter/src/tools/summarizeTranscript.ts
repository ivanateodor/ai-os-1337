import { z } from 'zod';

export const summarizeTranscriptSchema = z.object({
  url: z.string().url(),
});

export async function summarize_transcript(input: z.infer<typeof summarizeTranscriptSchema>) {
  // TODO: fetch transcript + summarize via LLM
  return {
    url: input.url,
    claims: ["Claim A", "Claim B"],
    emotions: ["regret", "relief"],
    contradictions: ["Said X earlier, now implies Y"]
  };
}
