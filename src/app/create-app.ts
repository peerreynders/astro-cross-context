import { atom } from 'nanostores';

function createApp({ count: startCount }: { count: number }) {
  const counter = atom<number>(startCount);

  return {
    get count(): number {
      return counter.get();
    },
    listen(cb: (v?: number) => void): () => void {
      return counter.listen(cb);
    },
    increment(_e: unknown): void {
      counter.set(counter.get() + 1);
    },
    decrement(_e: unknown): void {
      counter.set(counter.get() - 1);
    },
  };
}

export type App = ReturnType<typeof createApp>;

export { createApp };
