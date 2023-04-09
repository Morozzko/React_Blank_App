import fs from 'fs/promises'
import { ReducersListRegexp } from './lib/types'

type Payload = {
  name: string
  pathToReducersList: string
  regexp: string
  pathForImportReducers: string
}
export const insertToReducer = async ({ name, pathToReducersList, regexp, pathForImportReducers }: Payload) => {
  try {
    // Чтение содержимого файла
    const data = await fs.readFile(pathToReducersList, 'utf-8')

    // Замена строки // insert hook here
    const reducerPlaceholder = new RegExp(`${regexp}`)
    const reducerInsertion = `${name}: ${name}.Reducer,\n`
    const updatedDataWithReducer = data.replace(reducerPlaceholder, match => `${match}\n${reducerInsertion}`)

    // Добавление строки import после последней строки import
    const lastImportRegex = /^import.*;?$\n(?!import)/m
    const importInsertion = `import { ${name} } from '${pathForImportReducers}${name}'\n`
    const updatedDataWithImport = updatedDataWithReducer.replace(lastImportRegex, match => `${match}${importInsertion}`)

    // Запись изменений обратно в файл
    await fs.writeFile(pathToReducersList, updatedDataWithImport, 'utf-8')
    console.log('Reducers list обновлен')
  } catch (err) {
    console.error(`Ошибка при обновлении файла: ${err}`)
  }
}
