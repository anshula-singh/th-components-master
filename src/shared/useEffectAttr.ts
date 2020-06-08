export function useEffectAttr(fn: Function, deps: Array<string>, context: any) {
  let prevValues = new Map<string, any>();
  return () => {
    let prev = deps.map(key => prevValues.get(key));
    let next = deps.map(key => context[key]);
    for (let i in prev) {
      if (next[i] !== prev[i]) {
        fn.call(context);
        break;
      }
    }
    for (let k of deps) {
      prevValues.set(k, context[k]);
    }
  };
}
