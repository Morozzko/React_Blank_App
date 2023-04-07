const fs = require('fs')
const path = require('path')

const folderPath = './apps/react_blank/src/components'

function readFilesInDirectory(directoryPath) {
  // Читаем содержимое каждого файла в директории
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err

    files.forEach(file => {
      const filePath = path.join(directoryPath, file.name)

      // Если это папка "node_modules", пропускаем ее
      if (
        file.isDirectory() &&
        (file.name === 'node_modules' || file.name === '.idea' || file.name === 'build' || file.name === '.git')
      ) {
        return
      }

      // Если это папка, рекурсивно вызываем эту же функцию для чтения файлов в этой папке
      if (file.isDirectory()) {
        readFilesInDirectory(filePath)
      } else {
        // Читаем содержимое файла
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) throw err

          // Записываем содержимое файла в файловую систему
          const result = `File: ${filePath}\nContent:\n${data}`
          fs.writeFile('folderData.txt', result, { flag: 'a' }, err => {
            if (err) throw err
          })
        })
      }
    })
  })
}

// Пример использования
readFilesInDirectory(folderPath)
