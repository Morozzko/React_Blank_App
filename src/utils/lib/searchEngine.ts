import { merge } from './MergeObjects'

export function getValue(obj: object | [], path: string, map?: boolean, sort?: any) {
  const arrayRegex = /(\[(\d?)*])/i

  const pathArray = path.split('.')
  let objectStructure = sort ? filterData(obj, sort) : obj

  if (objectStructure) {
    try {
      for (let i = 0; i < pathArray.length; i++) {
        if (Array.isArray(objectStructure)) {
          objectStructure = getArrayValues(objectStructure, pathArray[i])
        } else {
          objectStructure = getDescriptorValue(objectStructure, pathArray[i])
        }
      }
    } catch (e) {
      return 'Ошибка в генерируемом пути'
    }
  } else return 'Нет значения'

  //@ts-ignore
  function filterData(array, rule: any) {
    //@ts-ignore
    function sortDESC(a, b) {
      return getValue(b, rule.path) - getValue(a, rule.path)
    }
    //@ts-ignore

    function sortASC(a, b) {
      return getValue(a, rule.path) - getValue(b, rule.path)
    }

    if (rule.action === '=') {
      //@ts-ignore

      return array.filter(ele => getValue(ele, rule.path) == rule.value)
    } else if (rule.action === '!') {
      //@ts-ignore

      return array.filter(ele => getValue(ele, rule.path) != rule.value)
    } else if (rule.action === '>') {
      //@ts-ignore

      return array.filter(ele => getValue(ele, rule.path) > rule.value)
    } else if (rule.action === '<') {
      //@ts-ignore

      return array.filter(ele => getValue(ele, rule.path) < rule.value)
    } else if (rule.action.toUpperCase() === 'HIGHEST') {
      return array.sort(sortDESC)[0]
    } else if (rule.action.toUpperCase() === 'LOWEST') {
      return array.sort(sortASC)[0]
    } else {
      return array
    }
  }
  //@ts-ignore

  function getDescriptorValue(obj, path) {
    if (obj === null) {
      return null
    }
    if (path.match(arrayRegex)) {
      const index = path.match(arrayRegex)[0].slice(1, -1)

      if (index.length) {
        try {
          //@ts-ignore

          return Object.getOwnPropertyDescriptor(obj, path.split('[')[0]).value[index]
        } catch (e) {
          return null
        }
      } else {
        try {
          //@ts-ignore

          return Object.getOwnPropertyDescriptor(obj, path.split('[')[0]).value
        } catch (e) {
          return null
        }
      }
    } else {
      //@ts-ignore

      return Object.getOwnPropertyDescriptor(obj, path).value
    }
  }
  //@ts-ignore

  function getArrayValues(array, path) {
    return array.length
      ? //@ts-ignore

        array.map(ele => (Array.isArray(ele) ? getArrayValues(ele, path) : getDescriptorValue(ele, path)))
      : null
  }
  //@ts-ignore

  function ArrayCheck(obj) {
    let data

    if (Array.isArray(obj)) {
      let cleaner = obj.filter(ele => ele != null)
      data = cleaner.join()
    } else {
      data = obj
    }
    if (data === null) {
      return ''
    }
    if (typeof data === 'object') {
      return 'Ошибка в генерируемом пути'
    }
    // if (data.match("object Object")) {
    //     return "Ошибка в генерируемом пути"
    // }

    return data
  }

  if (map) {
    return objectStructure
  }

  return ArrayCheck(objectStructure)
}

export function createObject(path: string, value: string) {
  const pathArray = path.split('.')

  if (pathArray.length > 1) {
    const obj = {}
    let currentPath = null
    for (let i = 0; i < pathArray.length; i++) {
      if (i === pathArray.length - 1) {
        currentPath[pathArray[i]] = value
      } else {
        if (currentPath === null) {
          //@ts-ignore

          obj[pathArray[i]] = {}
          //@ts-ignore

          currentPath = obj[pathArray[i]]
        } else {
          currentPath[pathArray[i]] = {}
          currentPath = currentPath[pathArray[i]]
        }
      }
    }
    return obj
  } else {
    return { [path]: value }
  }
}

export function universalObjectDestructuring(params: { path: string; value: string; mainObject: object }) {
  const secondObject = createObject(params.path, params.value)
  return merge(params.mainObject, secondObject)
}
