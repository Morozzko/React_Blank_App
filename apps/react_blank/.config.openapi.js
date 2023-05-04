const path = require('path')

const createPath = (pathName) => path.resolve(__dirname, pathName)

const configFile = {
  // указываем путь к папке, в которой находятся файлы с хуками
  hooksFolder: createPath('./src/features/generated/hooks/'),
  // файл куда заберутся все импорты хуков
  exportFile: createPath('./src/features/generated/hooks.ts'),
  // приписка к импорту для файла хуков
  hooksImportFileSuffix: './hooks/',
  // путь до reducers файла
  reducersImportDestination: createPath(
    './src/app/store/generated/reducers.ts'
  ),
  // путь до middleware файла
  middlewaresImportDestination: createPath(
    './src/app/store/generated/middlewares.ts'
  ),
  reducersImportFileSuffix: '@generated/hooks/',
  middlewaresImportFileSuffix: '@generated/hooks/',
  reducersObjectName: 'generatedReducersList',
  middlewaresObjectName: 'generatedMiddlewaresList',
  eslintCommand: 'yarn run eslint'
}

module.exports={
  configFile
}
