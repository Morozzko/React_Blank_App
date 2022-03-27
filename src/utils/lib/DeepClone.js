export function DeepClone(obj) {
  const clObj = {}
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = DeepClone(obj[i])
      continue
    }
    clObj[i] = obj[i]
  }
  return clObj
}
