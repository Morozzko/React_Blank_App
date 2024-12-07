const path = require('path')

const useAppActionsFile = './src/utils/hooks/useAppActions.ts'
const reducersFile = './src/app/store/reducers.ts'
const routerFile = './src/app/router/utils/pages.ts'

const pathToWidgetTemplate = '../../_templates/rtkgen/widget/'
const pathToServiceTemplate = '../../_templates/rtkgen/service/'
const pathToPageTemplate =  '../../_templates/rtkgen/page/'

const pathToPasteWidget = './src/features/widgets/'
const pathToPasteService = './src/features/services/'
const pathToPastePage = './src/pages/'

module.exports = {
  filePath: {
    reducersList: path.resolve(__dirname, reducersFile),
    useAppActions: path.resolve(__dirname, useAppActionsFile),
    router: path.resolve(__dirname, routerFile)
  },
  regexp: {
    useAppActions: {
      hooks: 'insert hook here',
      actions: 'insert actions here'
    },
    reducersList: {
      service: 'Services: Начало',
      widget: 'Widgets: Начало'
    },
    router: {
      import: 'insert page imports here',
    }
  },
  importPath: {
    useAppActions: {
      service: '@services/',
      widget: '@widgets/'
    },
    reducersList: {
      service: '@services/',
      widget: '@widgets/'
    },
    router: {
      page:`
   export const Sample = lazy(() =>
  import('@pages/Sample').then(module => ({
    default: module.Page,
  }))
)
    `
    }
  },
  pathToTemplate: {
    service: path.resolve(__dirname, pathToServiceTemplate),
    widget: path.resolve(__dirname, pathToWidgetTemplate),
    page: path.resolve(__dirname, pathToPageTemplate)
  },
  pathToPaste: {
    service: path.resolve(__dirname, pathToPasteService),
    widget: path.resolve(__dirname, pathToPasteWidget),
    page: path.resolve(__dirname, pathToPastePage)
  },
  eslintCommand: 'yarn run eslint'
}
