/** Detect free variable `global` from Node.js. */
export const freeGlobal =
  typeof global === 'object' &&
  global !== null &&
  global.Object === Object &&
  global

/** Detect free variable `globalThis` */
const freeGlobalThis =
  typeof globalThis === 'object' &&
  globalThis !== null &&
  globalThis.Object === Object &&
  globalThis

/** Detect free variable `self`. */
const freeSelf =
  typeof self === 'object' && self !== null && self.Object === Object && self

/** Used as a reference to the global object. */
export const root =
  freeGlobalThis || freeGlobal || freeSelf || Function('return this')()
