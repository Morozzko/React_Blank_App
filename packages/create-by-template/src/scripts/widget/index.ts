import fs from 'fs/promises'
import path from 'path'

type Payload = {
  source: string
  destination: string
  name: string
}

const copyFiles = async ({ name, source, destination: d }: Payload) => {
  const destination = `${d}/${name}/`
  try {
    const files = await fs.readdir(source, { withFileTypes: true })

    // Создание целевой директории, если она не существует
    await fs.mkdir(destination, { recursive: true })

    for (const file of files) {
      const sourcePath = path.join(source, file.name)
      const destinationPath = path.join(destination, file.name)

      if (file.isDirectory()) {
        // Если текущий файл является директорией, рекурсивно копируем его содержимое
        await copyFiles({ source: sourcePath, destination: destinationPath, name })
      } else {
        // Если текущий файл является файлом
        const fileContent = await fs.readFile(sourcePath, 'utf-8')

        if (file.name === 'index.tsx') {
          // Если имя файла равно index.tsx, заменяем слово 'Sample' на name
          const updatedContent = fileContent.replace(/const Sample/g, `const ${name}`)
          await fs.writeFile(destinationPath, updatedContent, 'utf-8')
        } else {
          // В противном случае просто копируем файл
          await fs.copyFile(sourcePath, destinationPath)
        }
      }
    }
  } catch (err) {
    console.error(`Ошибка при копировании файлов: ${err}`)
  }
}

export const createWidget = async (payload: Payload) => {
  await copyFiles(payload)
  console.log(`Widget ${payload.name} created`)
}
