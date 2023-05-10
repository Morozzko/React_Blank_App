import fs from 'fs/promises'
import path from 'path'

type PayloadType = {
  source: string
  destination: string
  name: string
}

const copyFiles = async ({ name, source, destination }: PayloadType) => {
  try {
    const files = await fs.readdir(source, { withFileTypes: true })

    // Создание целевой директории, если она не существует
    await fs.mkdir(destination, { recursive: true })

    for (const file of files) {
      const sourcePath = path.join(source, file.name)
      const destinationPath = path.join(destination, file.name)

      if (file.isDirectory()) {
        // Если текущий файл является директорией, рекурсивно копируем его содержимое
        await copyFiles({
          source: sourcePath,
          destination: destinationPath,
          name,
        })
      } else {
        // Если текущий файл является файлом
        const fileContent = await fs.readFile(sourcePath, 'utf-8')

        if (file.name === 'index.tsx') {
          // Если имя файла равно index.tsx, заменяем слово 'Sample' на name
          const updatedContent = fileContent.replace(
            /const sample/g,
            `const ${name}`
          )
          await fs.writeFile(destinationPath, updatedContent, 'utf-8')
        }
        // Меняем имя уникальной переменной
        else if (file.name === 'name.ts') {
          const updatedContent = fileContent.replace(
            /- sample -/g,
            `- ${name} -`
          )
          await fs.writeFile(destinationPath, updatedContent, 'utf-8')
        }
        // В противном случае просто копируем файл
        else {
          await fs.copyFile(sourcePath, destinationPath)
        }
      }
    }
  } catch (err) {
    console.error(`Error while clone service: ${err}`)
  }
}

export const createService = async (payload: PayloadType) => {
  await copyFiles(payload)
  console.log('\x1b[36m', `Service ${payload.name} created`, '\x1b[0m')
}
