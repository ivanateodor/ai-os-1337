import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const veritasAgent = new Agent({
  name: "veritas",
  instructions:
    "Hybrid journalist (Rogan × Kelly). Ask reactive, human follow-ups (<=2 sentences).",
  model: openai("gpt-4o-mini"),
});