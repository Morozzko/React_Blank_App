const fs = require('fs')
const path = require('path')
const { removeImportsFromFile } = require('../../utils/deleteImportsFromFile')
const { config } = require('../config/constants')

// указываем путь к папке, в которой находятся файлы
const folderPath = path.resolve(__dirname, config.hooksFolder)
// файл куда заберутся все импорты хуков
const importFilePath = path.resolve(__dirname, config.exportFile)

// создаем регулярное выражение, которое будет искать все хуки
const hooksRegExp = /use(\w+)Mutation|use(\w+)Query/g

// создаем массив для хранения импортов
const imports = []

// получаем список файлов в папке
const files = fs.readdirSync(folderPath)

// итерируемся по каждому файлу в папке
files.forEach(file => {
  // получаем полный путь к файлу
  const filePath = path.join(folderPath, file)

  // проверяем, является ли файл TypeScript файлом
  if (path.extname(filePath) !== '.ts') {
    return
  }

  // читаем содержимое файла
  const data = fs.readFileSync(filePath, 'utf8')

  // разделяем содержимое файла на строки и разворачиваем их в обратном порядке
  const lines = data.split('\n').reverse()

  // находим индекс строки, в которой находится экспорт injectedRtkApi
  const injectedRtkApiIndex = lines.findIndex(line => {
    const trimmedLine = line.trim()

    return trimmedLine.endsWith('} = injectedRtkApi') || trimmedLine.endsWith('} = injectedRtkApi;')
  })

  // если экспорта injectedRtkApi нет, то пропускаем файл
  if (injectedRtkApiIndex === -1) {
    return
  }

  // ищем все хуки в строках, предшествующих экспорту injectedRtkApi
  const hooks = []
  for (let i = injectedRtkApiIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith('export const {')) {
      break
    }
    let match
    while ((match = hooksRegExp.exec(line)) !== null) {
      // добавляем найденный хук в массив
      hooks.push(match[0])
    }
  }

  console.log(hooks)
  if (hooks.length > 0) {
    imports.push(
      `import { ${hooks.join(', ')} } from '${config.hooksImportFileSuffix}${path.basename(filePath, '.ts')}';`
    )
  }
})

// удаляем все импорты из файла
removeImportsFromFile(importFilePath)
// читаем содержимое файла index.ts
const data = fs.readFileSync(importFilePath, 'utf8')
console.log(imports)
// добавляем новые импорты в начало файла
// если массив импортов не пустой, то вставляем его в начало файла

// добавляем новые импорты в начало файла
// если массив импортов не пустой, то вставляем его в начало файла
if (imports.length > 0) {
  fs.writeFileSync(importFilePath, `${imports.join('\n')}\n${data}`, 'utf8', err => {
    if (err) {
      console.error(err)
    }
  })
}
console.log('\x1b[32m', 'Инъекция Hooks завершена', '\x1b[0m')
