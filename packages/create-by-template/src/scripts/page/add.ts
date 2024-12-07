import fs from 'fs/promises'
import path from 'path'
import { getConfig } from '../utils'
import { insertToRouter } from '../utils/insertToPage'

type PayloadType = {
  source: string
  destination: string
  name: string
}

const copyFiles = async ({
  name: pageName,
  source,
  destination,
}: PayloadType) => {
  const name = pageName.charAt(0).toUpperCase() + pageName.slice(1)

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

        if (file.name === 'data-testid.ts') {
          // Если имя файла равно data-testid.ts, заменяем слово 'Sample' на name
          const updatedContent = fileContent.replace(
            /const name = 'Sample'/g,
            `const name = '${name}'`
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
    console.error(`Error while clone page: ${err}`)
  }
}

export const createPage = async (payload: PayloadType) => {
  await copyFiles(payload)

  const name = payload.name.charAt(0).toUpperCase() + payload.name.slice(1)

  // Добавляем страницу в router, если есть конфигурация
  const config = getConfig()
  if (config?.filePath?.router) {
    await insertToRouter({
      name,
      pathToRouter: config.filePath.router,
      importTemplate: config.importPath.router.page,
      regexp: config.regexp.router.import as string,
    })
  }

  console.log('\x1b[36m', `Page ${name} created`, '\x1b[0m')
}
