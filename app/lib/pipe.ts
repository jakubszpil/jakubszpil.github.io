export interface Pipe<A, B> {
  (a: A): B;
  pipe<C>(fn: (b: B) => C): Pipe<A, C>;
}

export function pipe<A, B>(fn1: (a: A) => B): Pipe<A, B> {
  const run: Pipe<A, B> = (a) => fn1(a);
  run.pipe = <C>(fn2: (b: B) => C) => pipe((a) => fn2(fn1(a)));
  return run;
}
