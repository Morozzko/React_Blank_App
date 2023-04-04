const fs = require('fs')
const path = require('path')

function readFilesInDirectory(directoryPath) {
  // Читаем содержимое каждого файла в директории
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err

    files.forEach(file => {
      const filePath = path.join(directoryPath, file.name)

      // Если это папка "node_modules", пропускаем ее
      if (file.isDirectory() && file.name === 'node_modules') {
        return
      }

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
readFilesInDirectory('')
