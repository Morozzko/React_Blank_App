const fs = require('fs')
const path = require('path')

// Путь до основного schema.prisma файла
const mainSchemaPath = './prisma/schema.prisma'

// Чтение и очистка основного schema.prisma файла
let mainSchema = fs.readFileSync(mainSchemaPath, 'utf-8')
mainSchema = mainSchema
  .replace(/model\s+[a-zA-Z_][a-zA-Z0-9_]*\s*{[^}]*}/g, '')
  .replaceAll('\n\n\n', '')
fs.writeFileSync(mainSchemaPath, mainSchema)

// Функция для рекурсивного обхода директорий
const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    if (
      isDirectory &&
      !['node_modules', 'dist', 'build', 'prisma'].includes(f)
    ) {
      walkDir(dirPath, callback)
    } else if (!isDirectory) {
      callback(path.join(dir, f))
    }
  })
}

// Функция, которая будет вызвана для каждого найденного файла
const processFile = filePath => {
  if (filePath.endsWith('prisma')) {
    console.log(filePath)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const modelMatch = fileContent.match(
      /model\s+[a-zA-Z_][a-zA-Z0-9_]*\s*{[^}]*}/g
    )
    if (modelMatch) {
      const modelContent = modelMatch.join('\n')
      fs.appendFileSync(mainSchemaPath, `\n${modelContent}`)
    }
  }
}

// Рекурсивный обход файловой системы для поиска всех файлов, имя которых заканчивается на 'prisma'
walkDir('./', processFile)
