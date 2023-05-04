# Generate RTK Query hooks with injection to store

### This is a wrapper over the @rtk-query/codegen-openapi library, with automatic injection to store

## Install

```
npm i @npm.piece/generate-hooks-rtk
```

```
yarn add @npm.piece/generate-hooks-rtk
```

## Run command
```
npm.piece-gen-rtk-hooks
```

## Create config file openapi-config.ts near package.json:

```typescript
import type { ConfigFile } from '@npm.piece/generate-hooks-rtk/types/export'

// Выбираем куда добавлять хуки
const getName = (name: string) => `./src/features/generated/hooks/${name}.ts`
const setOrderName = (name: string) => `${name}Store`
const setFilterName = (name: string) => [new RegExp(name, 'i')]

const getControllers = (names: string[]) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [getName(name)]: {
        filterEndpoints: setFilterName(name),
        exportName: setOrderName(name),
        tag: name,
      },
    }),
    {}
  )

const controllers = ['pet', 'order', 'user']
const config: ConfigFile = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  // schemaFile: './swagger.json',
  apiFile: '@app/api/RTK',
  tag: true,
  hooks: true,
  // outputFile: getName('api'),
  outputFiles: { ...getControllers(controllers) },
}

export default config
```

## Create config file .config.openapi.js near package.json:

```javascript
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
```
