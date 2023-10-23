export /**
 * The deepClone function takes an object and returns a new object with the same properties.
 * If any of those properties are objects, they will be cloned as well.
 *
 * @example const a = deepClone(b)
 *
 * @param obj T Specify the type of object that is being cloned
 *
 * @return A new object of the same type as the original
 *
 */
const deepClone = <T>(obj: T): T => {
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
