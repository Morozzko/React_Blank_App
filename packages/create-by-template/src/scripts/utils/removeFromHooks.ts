import fs from 'fs/promises'

type Payload = {
  pathToFile: string
  name: string
}

export const removeFromHooks = async ({ pathToFile, name }: Payload) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToFile, 'utf-8')

    // Удаление импортов
    const importRegex = new RegExp(`^import\\s+{\\s*Actions\\s+as\\s+${name}\\s*}\\s+from\\s+'.+?${name}/';?\\n`, 'gm')
    const updatedContent = data.replace(importRegex, '')

    // Удаление строк const ${name}Actions = useActions(${name})
    const constRegex = new RegExp(`const\\s+${name}Actions\\s+=\\s+useActions\\(${name}\\);?\\n`, 'gm')
    const updatedContentWithConstRemoved = updatedContent.replace(constRegex, '')

    // Удаление строк ${name}Actions,
    const actionsRegex = new RegExp(`${name}Actions,?\\n`, 'gm')
    const updatedContentWithActionsRemoved = updatedContentWithConstRemoved.replace(actionsRegex, '')

    // Запись изменений обратно в файл
    await fs.writeFile(pathToFile, updatedContentWithActionsRemoved, 'utf-8')
    console.log('\x1b[36m', `Removed ${name} from useAppActions`, '\x1b[0m')
  } catch (err) {
    console.error(`Error while updating useAppActions: ${err}`)
  }
}
