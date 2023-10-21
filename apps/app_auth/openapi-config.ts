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

const controllers = ['Auth']
const config: ConfigFile = {
  // schemaFile:
  // 'https://stage-app-01.office.rtk-cd.ru:7274/swagger/v1/swagger.json',
  schemaFile: './swagger.json',
  apiFile: '@app/api/RTK',
  tag: true,
  hooks: true,
  // outputFile: getName('api'),
  outputFiles: { ...getControllers(controllers) },
}

// eslint-disable-next-line import/no-default-export
export default config
