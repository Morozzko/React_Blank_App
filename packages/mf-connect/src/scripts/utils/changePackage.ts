import fs from 'fs'
import path from 'path'

export const replaceNameInFile = (fp: string, newName: string) => {
  const filePath = path.join(fp, 'package.json')

  // Читаем файл
  const data = fs.readFileSync(filePath, 'utf8')

  const newData = data
    .split('\n')
    .map(line => {
      if (line.includes('"name": "')) {
        return `"name": "${newName.toLowerCase()}",`
      }

      return line
    })
    .join('\n')

  // Записываем обновленные данные обратно в файл
  fs.writeFileSync(filePath, newData, 'utf8')
}
