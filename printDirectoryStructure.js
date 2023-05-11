const fs = require('fs')
const path = require('path')

function isInBlacklist(file) {
  const list = ['node_modules', 'dist', 'build', '.git', '.idea']

  return list.includes(file)
}

function printDirectoryStructure(directoryPath, indent = 0, fileDescriptor) {
  const files = fs.readdirSync(directoryPath)

  files.forEach(file => {
    const filePath = path.join(directoryPath, file)

    // Если это папка "node_modules", пропускаем ее
    if (isInBlacklist(file)) {
      return
    }

    // Создаем строку с именем файла или папки и отступом, соответствующим уровню вложенности
    const line = `${'-'.repeat(indent)}- ${file}\n`

    // Записываем эту строку в файл с помощью метода fs.write
    fs.write(fileDescriptor, line, err => {
      if (err) throw err
    })

    const fileStats = fs.statSync(filePath)

    // Если это папка, вызываем эту же функцию для вывода ее содержимого
    if (fileStats.isDirectory()) {
      printDirectoryStructure(filePath, indent + 2, fileDescriptor)
    }
  })
}

// Создаем файл с именем "анализ.txt" и запускаем функцию для записи в него структуры файлов
fs.open('folderStructure.txt', 'w', (err, fileDescriptor) => {
  if (err) throw err

  printDirectoryStructure('./apps/react_blank', 0, fileDescriptor)

  // Закрываем файл после записи
  fs.close(fileDescriptor, err => {
    if (err) throw err
  })
})
