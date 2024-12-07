import fs from 'fs/promises'
import { getConfig } from './getConfig'

type PayloadType = {
  name: string
  pathToRouter: string
}

export const removeFromRouter = async ({ name, pathToRouter }: PayloadType) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToRouter, 'utf-8')
    const config = getConfig()

    if (!config?.importPath?.router?.page) {
      throw new Error('Missing router page template in config')
    }

    // Получаем первую строку из шаблона и заменяем Sample на имя
    const firstTemplateLine = config.importPath.router.page
      .split('\n')[0]
      .replaceAll('Sample', name)
      .trim()

    // Подсчитываем количество строк в шаблоне
    const templateLines = config.importPath.router.page.split('\n').length

    const lines = data.split('\n')

    // Сначала находим индекс комментария
    const commentIndex = lines.findIndex(line =>
      line.includes(config.regexp.router.import as string)
    )

    if (commentIndex === -1) {
      console.log('\x1b[33m', `No import comment found in router`, '\x1b[0m')

      return
    }

    // Ищем начало блока только после комментария
    const startIndex = lines.findIndex((line, index) => {
      if (index <= commentIndex) {
        return false
      }
      const trimmedLine = line.trim()
      const trimmedTemplate = firstTemplateLine.trim()

      return trimmedLine === trimmedTemplate
    })

    if (startIndex === -1) {
      console.log(
        '\x1b[33m',
        `No export found for ${name} in router`,
        '\x1b[0m'
      )

      return
    }

    // Сохраняем импорт, комментарий и пустую строку после него
    const imports = lines.slice(0, commentIndex + 1)
    // Сохраняем все строки после удаляемого блока
    const rest = lines.slice(startIndex + templateLines)
    // Собираем файл с сохранением структуры
    const updatedContent = [...imports, '', ...rest].join('\n')

    // Запись изменений обратно в файл
    await fs.writeFile(pathToRouter, updatedContent, 'utf-8')
    console.log('\x1b[36m', `Removed ${name} from router`, '\x1b[0m')
  } catch (err) {
    console.error(`Error while removing from router: ${err}`)
  }
}
