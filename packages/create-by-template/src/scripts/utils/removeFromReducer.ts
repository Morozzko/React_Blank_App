import fs from 'fs/promises'

type Payload = {
  name: string
  pathToReducersList: string
}

export const removeFromReducer = async ({ name, pathToReducersList }: Payload) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToReducersList, 'utf-8')

    // Удаление импорта
    const importRegex = new RegExp(`^import\\s+{\\s*Reducer\\s+as\\s+${name}\\s*}\\s+from\\s+'.+${name}';?\\n`, 'gm')
    const updatedContent = data.replace(importRegex, '')

    // Удаление строки ${name},
    const reducerRegex = new RegExp(`${name},?\\n`, 'gm')
    const updatedContentWithReducerRemoved = updatedContent.replace(reducerRegex, '')

    // Запись изменений обратно в файл
    await fs.writeFile(pathToReducersList, updatedContentWithReducerRemoved, 'utf-8')
    console.log('Reducers list updated')
  } catch (err) {
    console.error(`Ошибка при обновлении файла: ${err}`)
  }
}
