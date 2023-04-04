import type { ConfigFile } from '@rtk-query/codegen-openapi'

// Выбираем куда добавлять хуки
const getName = (name: string) => `../../../src/features/generated/hooks/${name}.ts`

const config: ConfigFile = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  apiFile: '../../../src/app/api/RTK.ts',
  tag: true,
  hooks: true,
  outputFiles: {
    // './src/store/user.ts': {
    //   filterEndpoints: [/user/i],
    // },
    [getName('order')]: {
      filterEndpoints: [/order/i],
      exportName: 'orderStore',
    },
    [getName('pet')]: {
      filterEndpoints: [/pet/i],
      exportName: 'petStore',
    },
  },
}

// eslint-disable-next-line import/no-default-export
export default config
