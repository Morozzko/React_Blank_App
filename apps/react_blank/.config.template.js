const path = require('path')

const useAppActionsFile = './src/utils/hooks/useAppActions.ts'
const reducersFile = './src/app/store/reducers.ts'

module.exports = {
  filePath: {
    reducersList: path.resolve(__dirname, reducersFile),
    useAppActions: path.resolve(__dirname, useAppActionsFile)
  },
  regexp: {
    useAppActions: {
      hooks: 'insert hook here',
      actions: 'insert actions here'
    },
    reducersList: {
      service: 'Services: Начало',
      widget: 'Widgets: Начало'
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
    }

  }
}
