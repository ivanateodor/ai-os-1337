import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const motherAgent = new Agent({
  name: "mother",
  instructions: "You are Mother AI, the supervisor. Answer concisely for now.",
  model: openai("gpt-4o-mini")
});
