import fs from 'fs'
import path from 'path'

const indexHTMLPath = '/public/index.html'

export const removeScriptTags = (fp: string) => {
  const filePath = path.join(fp, indexHTMLPath)

  // Читаем файл
  const data = fs.readFileSync(filePath, 'utf8')

  // Удаляем все строки, которые содержат <script async src="%REACT_APP_
  const newData = data
    .split('\n')
    .filter(line => !line.includes('<script async src="%REACT_APP_'))
    .filter(line => !line.includes('<script src="%REACT_APP_'))
    .join('\n')

  // Записываем обновленный HTML обратно в файл
  fs.writeFileSync(filePath, newData, 'utf8')
}
