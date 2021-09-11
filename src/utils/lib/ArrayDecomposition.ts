export function ArrayDecomposition(array: Array<any>) {
  let newArray: any[] = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(ArrayDecomposition(array[i]))
    } else newArray = newArray.concat(array[i])
  }
  return newArray
}
