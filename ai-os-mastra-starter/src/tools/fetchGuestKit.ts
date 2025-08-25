import { z } from 'zod';

export const fetchGuestKitSchema = z.object({
  guestId: z.string(),
});

export async function fetch_guest_kit(input: z.infer<typeof fetchGuestKitSchema>) {
  // TODO: pull bios/links/transcripts from your CMS/DB
  return {
    guestId: input.guestId,
    bio: "Demo Guest — entrepreneur, failed startup in 2019, advocacy in mental health.",
    links: ["https://example.com/guest"],
    priorQuotes: [
      "I still have nightmares about that launch.",
      "Silence was my way to cope."
    ]
  }
}
