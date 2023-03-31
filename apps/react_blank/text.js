// const fs = require('fs')
// const path = require('path')
//
// function getDirectoryStructure(dirPath, relativePath = '') {
//   const structure = {}
//   const items = fs.readdirSync(dirPath)
//
//   items.forEach(item => {
//     const itemPath = path.join(dirPath, item)
//     const itemRelativePath = path.join(relativePath, item)
//     const itemStats = fs.statSync(itemPath)
//
//     if (itemStats.isDirectory()) {
//       structure[itemRelativePath] = getDirectoryStructure(itemPath, itemRelativePath)
//     } else {
//       structure[itemRelativePath] = 'file'
//     }
//   })
//
//   return structure
// }
//
// const folderStructure = getDirectoryStructure('./src')
// console.log(folderStructure)

const fs = require('fs')
const path = require('path')

function readFilesInDirectory(directoryPath) {
  // Читаем содержимое каждого файла в директории
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err

    files.forEach(file => {
      const filePath = path.join(directoryPath, file.name)

      // Если это папка, рекурсивно вызываем эту же функцию для чтения файлов в этой папке
      if (file.isDirectory()) {
        readFilesInDirectory(filePath)
      } else {
        // Читаем содержимое файла
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) throw err

          // Выводим содержимое файла в консоль
          console.log(`File: ${filePath}\nContent:\n${data}`)
        })
      }
    })
  })
}

// Пример использования
readFilesInDirectory('./src/app/router')
