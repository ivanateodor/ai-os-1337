import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const trendAgent = new Agent({
  name: "trend",
  instructions:
    "TrendOracle: Stake a claim. Return Signal, Summary, Action, Invite.",
  model: openai("gpt-4o-mini"),
});
