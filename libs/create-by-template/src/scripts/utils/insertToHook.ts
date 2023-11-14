import fs from 'fs/promises'
import { UseAppActionsRegexpType } from './lib/types'

type PayloadType = {
  pathToHook: string
  name: string
  regexp: UseAppActionsRegexpType
  pathForImportHooks: string
}

export const insertToHooks = async ({
  pathToHook,
  name,
  regexp,
  pathForImportHooks,
}: PayloadType) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToHook, 'utf-8')

    // // Замена строки // insert hook here
    // const hookPlaceholder = new RegExp(`${regexp.hooks}`)
    // const hookInsertion = `const ${name} = useActions(${name}Actions)`
    // const updatedDataWithHook = data.replace(
    //   hookPlaceholder,
    //   match => `${match}\n${hookInsertion}`
    // )

    // Замена строки // insert actions here
    const actionsPlaceholder = new RegExp(`${regexp.actions}`)
    const actionsInsertion = `${name}: createAction(${name}Actions),`
    const updatedDataWithActions = data.replace(
      actionsPlaceholder,
      match => `${match}\n${actionsInsertion}`
    )

    // Добавление строки import после последней строки import
    const lastImportRegex = /^import.*;?$\n(?!import)/m
    const importInsertion = `import { Actions as ${name}Actions } from '${pathForImportHooks}${name}/'`
    const updatedDataWithImport = updatedDataWithActions.replace(
      lastImportRegex,
      match => `${match}${importInsertion}\n`
    )

    // Запись изменений обратно в файл
    await fs.writeFile(pathToHook, updatedDataWithImport, 'utf-8')
    console.log('\x1b[36m', `useAppAction updated with ${name}`, '\x1b[0m')
  } catch (err) {
    console.error(`Error while insert to useAppAction ${err}`)
  }
}
