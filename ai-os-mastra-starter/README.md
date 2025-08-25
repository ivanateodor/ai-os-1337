# 1337 Mother AI (Mastra) — Starter

This is a minimal **Mother AI + Agents** starter using **Mastra** (TypeScript). 
It wires a Supervisor ("Mother AI") that routes to two agents:
- **Veritas** (Journalist AI)
- **TrendOracle** (Trend Analysis)

## Quickstart

1) Clone and install
```bash
npm i
cp .env.example .env
# add your OPENAI_API_KEY or ANTHROPIC_API_KEY
```

2) Run locally
```bash
npm run dev
```

3) Test endpoints
```bash
curl -N -X POST http://localhost:3000/api/ask -H "Content-Type: application/json" -d '{"input":"Give me 3 interview follow-ups for Elon Musk."}'
curl -N -X POST http://localhost:3000/api/agents/trend -H "Content-Type: application/json" -d '{"topic":"AI art"}'
curl -N -X POST http://localhost:3000/api/agents/veritas -H "Content-Type: application/json" -d '{"guestId":"guest-demo","question":"What did you learn from your biggest failure?"}'
```

## Repo layout
- `src/index.ts` — server bootstrap
- `src/routes/api.ts` — HTTP endpoints (SSE-ready)
- `src/agents/` — Mother, Veritas, Trend
- `src/tools/` — shared tools (search, guest kit, transcript summary)
- `src/memory/` — simple memory stub (swap for Redis/pgvector later)
- `src/prompts/` — system prompts (Mother, Veritas, Trend)

## Notes
- You can switch providers (OpenAI/Anthropic) via env and agent configs.
- Memory layer is intentionally simple for MVP — replace with Redis + vector store.
- Treat workflows as tools so Mother AI can orchestrate reliably.
