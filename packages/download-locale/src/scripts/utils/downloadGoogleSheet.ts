import fs from 'fs'
import fetch from 'node-fetch'

type TranslationsType = {
  [key: string]: string
}

type TranslationFileType = {
  _fileName: string
} & TranslationsType

type DictionaryType = {
  [index: number]: {
    _fileName: string
    [key: string]: string
  }
}

export const downloadGoogleSheet = async (href: string) => {
  console.log('\x1b[35m', `Download table: ${href}`, '\x1b[0m')
  const response = await fetch(href)

  const data = await response.json()
  console.log(data)

  return data
}

// Функция createDictionary преобразует двумерный массив Google Sheets в словарь переводов
export const createDictionary = (googleSheet: string[][]): DictionaryType => {
  // Создание начального аккумулятора с названиями файлов для каждого языка
  const accumulator = googleSheet[0].reduce((acc, lang, index) => {
    if (!index) {
      return acc
    }

    return {
      ...acc,
      [index]: { _fileName: `${lang}` },
    }
  }, {})

  // Проход по строкам таблицы Google Sheets и создание объекта нового словаря
  return googleSheet.reduce((acc, sheetRow, rowIndex) => {
    if (!rowIndex) {
      return acc
    }

    // Создание объекта для текущей строки таблицы
    const newObj = sheetRow.reduce((innerAcc, value, columnIndex) => {
      if (!columnIndex) {
        return { [columnIndex]: value }
      }

      // Если строка содержит только одно значение, пропускаем ее
      if (sheetRow.length === 1) {
        return innerAcc
      }

      // Добавление значения из текущей ячейки таблицы в объект словаря
      const newResult = {
        ...innerAcc,
        // @ts-ignore
        [columnIndex]: { [innerAcc[0]]: value },
      }

      // Если это последняя итерация в строке, удаляем ненужный ключ '0'
      if (columnIndex + 1 === sheetRow.length) {
        // @ts-ignore
        delete newResult['0']

        return newResult
      }

      return newResult
    }, {})

    // Объединение нового объекта со словарем аккумулятора
    return MergeObjects(acc, newObj)
  }, accumulator)
}

const MergeObjects = (...objects: object[]) => {
  const result: Record<string, unknown> = {}

  objects.forEach(obj => {
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach((key: string) => {
        // @ts-ignore
        const objByPath = obj[key]

        if (typeof objByPath === 'object' && objByPath !== null) {
          result[key] = MergeObjects(result[key] || {}, objByPath)
        } else {
          result[key] = objByPath
        }
      })
    }
  })

  return result
}

export const createFile = async (data: TranslationFileType, publicPath: string, fileName = 'common.json') => {
  const { _fileName, ...newData } = data

  const name = `${publicPath}/${data._fileName}`

  fs.mkdir(name, { recursive: true }, error => {
    if (error) {
      console.log(error)
    }
    if (!error) {
      fs.writeFile(`${publicPath}/${_fileName}/${fileName}`, JSON.stringify(newData), e => {
        if (e) {
          console.log(e)
        }
        if (!e) {
          console.log('\x1b[35m', `File: "${publicPath}/${_fileName}/${fileName}" created`, '\x1b[0m')
        }
      })
    }
  })
}
