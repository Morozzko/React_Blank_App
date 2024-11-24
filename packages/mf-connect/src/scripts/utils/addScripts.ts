import fs from 'fs'
import path from 'path'

const indexHTMLPath = '/public/index.html'
export const addLineBefore = (fp: string, name: string) => {
  const filePath = path.join(fp, indexHTMLPath)

  // Читаем файл
  const data = fs.readFileSync(filePath, 'utf8')

  const script = `<script src="%REACT_APP_MF_${name?.toUpperCase()}%"></script>\n`

  // Добавляем новую строку перед </head>
  const newData = data.replace('</head>', `${script}</head>`)

  // Записываем обновленный HTML обратно в файл
  fs.writeFileSync(filePath, newData, 'utf8')
}
