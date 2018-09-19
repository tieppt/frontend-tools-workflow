export function print(...args) {
  console.log(...args);
}

export const map = (fn, array) => (console.log('mapppppp'), array.map(fn));
