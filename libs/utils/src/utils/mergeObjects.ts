/**
 * The mergeObjects function takes in any number of objects as arguments and returns a new object that contains all the properties from each argument.
 * If two or more objects have the same property, then the value for that property is taken from right-to-left (rightmost object wins).
 *
 * @example const coordinates = mergeObjects({ location: { x: 10 }}, { location: { y: 20}})
 * @param objects object[] Accept a variable number of objects
 *
 * @return An object
 *
 */
export const mergeObjects = (...objects: object[]) => {
  const result: Record<string, unknown> = {}

  objects.forEach(obj => {
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach((key: string) => {
        // @ts-ignore
        const objByPath = obj[key]

        if (typeof objByPath === 'object' && objByPath !== null) {
          result[key] = mergeObjects(result[key] || {}, objByPath)
        } else {
          result[key] = objByPath
        }
      })
    }
  })

  return result
}

// export function MergeObjects() {
//   let dst = {},
//     src,
//     p,
//     args = [].splice.call(arguments, 0)
//   while (args.length > 0) {
//     src = args.splice(0, 1)[0]
//     if (toString.call(src) === '[object Object]') {
//       for (p in src) {
//         if (src.hasOwnProperty(p)) {
//           if (toString.call(src[p]) === '[object Object]') {
//             dst[p] = MergeObjects(dst[p] || {}, src[p])
//           } else {
//             dst[p] = src[p]
//           }
//         }
//       }
//     }
//   }
//
//   return dst
// }
