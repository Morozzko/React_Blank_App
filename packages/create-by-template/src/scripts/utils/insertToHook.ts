import fs from 'fs/promises'
import { RegexpType } from './lib/types'

type Payload = {
  pathToHook: string
  name: string
  regexp: RegexpType
  pathForImportHooks: string
}

export const insertToHooks = async ({ pathToHook, name, regexp, pathForImportHooks }: Payload) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToHook, 'utf-8')

    // Замена строки // insert hook here
    const hookPlaceholder = new RegExp(`${regexp.hooks}`)
    const hookInsertion = `const ${name}Actions = useActions(${name}.Actions)`
    const updatedDataWithHook = data.replace(hookPlaceholder, match => `${match}\n${hookInsertion}`)

    // Замена строки // insert actions here
    const actionsPlaceholder = new RegExp(`${regexp.actions}`)
    const actionsInsertion = `${name}Actions,`
    const updatedDataWithActions = updatedDataWithHook.replace(
      actionsPlaceholder,
      match => `${match}\n${actionsInsertion}`
    )

    // Добавление строки import после последней строки import
    const lastImportRegex = /^import.*;?$\n(?!import)/m
    const importInsertion = `import { ${name} } from '${pathForImportHooks}${name}'\n`
    const updatedDataWithImport = updatedDataWithActions.replace(lastImportRegex, match => `${match}${importInsertion}`)

    // Запись изменений обратно в файл
    await fs.writeFile(pathToHook, updatedDataWithImport, 'utf-8')
    console.log('Файл успешно обновлен!')
  } catch (err) {
    console.error(`Ошибка при обновлении файла: ${err}`)
  }
}
