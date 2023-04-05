const fs = require('fs')
const path = require('path')
const { removeImportsFromFile } = require('../../utils/deleteImportsFromFile')
const { config } = require('../config/constants')

const middlewaresFile = path.resolve(__dirname, '../../../src/app/store/generated/middlewares.ts')
const foldersPath = path.resolve(__dirname, config.hooksFolder)

removeImportsFromFile(middlewaresFile)

function injectReducers(folderPath, filePath) {
  const storeRegex = /export\s*\{\s*injectedRtkApi\s*as\s*([a-zA-Z0-9_$]+)\s*\}/
  const fileNames = fs.readdirSync(folderPath)

  // Читаем содержимое файла

  const fileContent = fs.readFileSync(filePath, 'utf-8')

  let importStatements = ''
  let middlewaresStatements = `const ${config.middlewaresObjectName} = [ `

  for (const fileName of fileNames) {
    if (fileName.endsWith('.ts')) {
      const fullPath = path.join(folderPath, fileName)
      const fileContent = fs.readFileSync(fullPath, 'utf-8')
      const match = fileContent.match(storeRegex)

      if (match) {
        const storeName = match[1]
        const fileNameWithoutTS = fileName.replace('.ts', '')
        const importStatement = `import { ${storeName} } from '${config.middlewaresImportFileSuffix}${fileNameWithoutTS}'\n`
        const middlewaresStatement = `${storeName}.middleware,`
        importStatements += importStatement
        middlewaresStatements += middlewaresStatement
      }
    }
  }
  middlewaresStatements += ' ]\n'

  // Regex для поиска старого объекта старый объект
  const oldMiddlewaresRegex = new RegExp(`const\\s+${config.middlewaresObjectName}\\s*=\\s*\\[([\\s\\S]*?)\\]`)

  // Составляем новое содержимое файла с добавленными импортами и существующими данными
  const newFileContent = `${importStatements}\n\n\n${middlewaresStatements}\n\n${fileContent.replace(
    oldMiddlewaresRegex,
    ''
  )}`

  // Записываем новое содержимое файла
  try {
    fs.writeFileSync(filePath, newFileContent, 'utf-8')
    console.log('\x1b[36m', 'Инъекция Middlewares завершена', '\x1b[0m')
  } catch (error) {
    console.error(`Unable to write to file ${filePath}: ${error}`)
  }
}

injectReducers(foldersPath, middlewaresFile)
