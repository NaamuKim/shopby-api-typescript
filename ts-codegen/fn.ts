export function pipe<T>(initialValue: T, ...fns: Function[]): T {
  return fns.reduce((v, f) => f(v), initialValue);
}
