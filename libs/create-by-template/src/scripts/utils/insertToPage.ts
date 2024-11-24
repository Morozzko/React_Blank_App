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

    // Замена строки // insert hook here
    const routerPlaceholder = new RegExp(`${regexp}`)
    const reducerInsertion = `${importTemplate.replaceAll(
      'Sample',
      name
    )}\n${regexp}`
    const updatedDataWithPage = data.replace(
      routerPlaceholder,
      match => `${match}\n${reducerInsertion}`
    )

    // Запись изменений обратно в файл
    await fs.writeFile(pathToRouter, updatedDataWithPage, 'utf-8')
    console.log('\x1b[36m', `Router updated with ${name}`, '\x1b[0m')
  } catch (err) {
    console.error(`Error while updating ReducersList: ${err}`)
  }
}
