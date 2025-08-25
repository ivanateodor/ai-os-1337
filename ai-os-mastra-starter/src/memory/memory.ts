// Minimal memory stub: replace with Redis + vector store later
type Msg = { role: 'user' | 'assistant' | 'tool', content: string; ts: number };
const store = new Map<string, Msg[]>();

export function putMessage(thread: string, msg: Msg) {
  const arr = store.get(thread) ?? [];
  arr.push(msg);
  store.set(thread, arr.slice(-12)); // keep last N
}

export function getRecent(thread: string, n = 6) {
  const arr = store.get(thread) ?? [];
  return arr.slice(-n);
}
