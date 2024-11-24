import fs from 'fs/promises'

type PayloadType = {
  pathToFile: string
  name: string
}

export const removeFromHooks = async ({ pathToFile, name }: PayloadType) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToFile, 'utf-8')

    // Удаление импортов
    const importRegex = new RegExp(
      `^import\\s+{\\s*Actions\\s+as\\s+${name}Actions\\s*}\\s+from\\s+'.+?${name}/';?\\n`,
      'gm'
    )
    const updatedContent = data.replace(importRegex, '')

    // Удаление определений действий: Начало
    const actionsRegex = new RegExp(
      `${name}: createAction\\(${name}Actions\\),?\\n`,
      'gm'
    )
    const updatedContentWithActionsRemoved = updatedContent.replace(
      actionsRegex,
      ''
    )
    // Удаление определений действий: Конец

    // Запись изменений обратно в файл
    await fs.writeFile(pathToFile, updatedContentWithActionsRemoved, 'utf-8')
    console.log('\x1b[36m', `Removed ${name} from useAppActions`, '\x1b[0m')
  } catch (err) {
    console.error(`Error while updating useAppActions: ${err}`)
  }
}
