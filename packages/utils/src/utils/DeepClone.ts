export const DeepClone = <T>(obj: T): T => {
  const clObj: any = {}

  for (const i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = DeepClone(obj[i])
      continue
    }
    clObj[i] = obj[i]
  }

  return clObj as T
}
