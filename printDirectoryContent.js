const fs = require('fs')
const path = require('path')

const folderPath = './packages/create-by-template'

/**
 * The readFilesInDirectory function reads the contents of each file in a directory.
 *
 *
 * @param directoryPath Specify the path of the directory that we want to read
 *
 * @return Undefined
 *
 */
function readFilesInDirectory(directoryPath) {
  // Читаем содержимое каждого файла в директории
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      throw err
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file.name)

      // Если это папка "node_modules", пропускаем ее
      if (
        file.isDirectory() &&
        (file.name === 'node_modules' ||
          file.name === '.idea' ||
          file.name === 'build' ||
          file.name === 'dist' ||
          file.name === '.git')
      ) {
        return
      }
      if (
        file.name.match('yarn.lock') ||
        file.name.match('package.json') ||
        file.name.match('package-lock.json') ||
        file.name.match('README.md') ||
        file.name.match('.png') ||
        file.name.match('.jpeg') ||
        file.name.match('.jpg') ||
        file.name.match('.gif') ||
        file.name.match('.pdf') ||
        file.name.match('.doc') ||
        file.name.match('.docx') ||
        file.name.match('.ttf') ||
        file.name.match('.svg')
      ) {
        return
      }

      // Если это папка, рекурсивно вызываем эту же функцию для чтения файлов в этой папке
      if (file.isDirectory()) {
        readFilesInDirectory(filePath)
      } else {
        // Читаем содержимое файла
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            throw err
          }

          // Записываем содержимое файла в файловую систему
          const result = `File: ${filePath}\nContent:\n${data}`
          fs.writeFile('folderData.txt', result, { flag: 'a' }, err => {
            if (err) {
              throw err
            }
          })
        })
      }
    })
  })
}

// Пример использования
readFilesInDirectory(folderPath)
