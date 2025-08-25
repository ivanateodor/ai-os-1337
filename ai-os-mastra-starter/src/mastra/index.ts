import { Mastra } from "@mastra/core/mastra";
import { motherAgent } from "./agents/mother";
import { veritasAgent } from "./agents/veritas";
import { trendAgent } from "./agents/trend";

export const mastra = new Mastra({
  agents: { mother: motherAgent, veritas: veritasAgent, trend: trendAgent },
});
