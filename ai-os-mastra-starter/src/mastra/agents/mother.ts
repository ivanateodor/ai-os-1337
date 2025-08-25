import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const motherAgent = new Agent({
  name: "mother",
  instructions:
    "You are Mother AI, the 1337 supervisor. Decide if a request is interview-related or trend-related, then give one concise, helpful answer.",
  model: openai("gpt-4o-mini"),
});