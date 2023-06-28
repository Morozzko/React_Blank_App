export const deepClone = <T>(obj: T): T => {
  const clObj = {} as T

  for (const key in obj) {
    if (obj[key] instanceof Object) {
      clObj[key] = deepClone(obj[key])
      continue
    }
    clObj[key] = obj[key]
  }

  return clObj as T
}
