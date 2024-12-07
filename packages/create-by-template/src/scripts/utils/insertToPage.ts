import fs from 'fs/promises'

type PayloadType = {
  name: string
  pathToRouter: string
  importTemplate: string
  regexp: string
}

export const insertToRouter = async ({
  name,
  pathToRouter,
  importTemplate,
  regexp,
}: PayloadType) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToRouter, 'utf-8')

    // Подготовка импорта с заменой Sample на имя страницы
    const importString = importTemplate.replaceAll('Sample', name)

    // Находим место для вставки импорта (после комментария)
    const importPlaceholder = new RegExp(`${regexp}`)
    const updatedContent = data.replace(
      importPlaceholder,
      match => `${match}\n${importString}`
    )

    // Запись изменений обратно в файл
    await fs.writeFile(pathToRouter, updatedContent, 'utf-8')
    console.log('\x1b[36m', `Router updated with ${name}`, '\x1b[0m')
  } catch (err) {
    console.error(`Error while updating router: ${err}`)
  }
}
