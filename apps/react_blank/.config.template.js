const path = require('path')

const useAppActionsFile = './src/utils/hooks/useAppActions.ts'
const reducersFile = './src/app/store/reducers.ts'

module.exports = {
  store: path.resolve(__dirname, reducersFile),
  useAppActions: path.resolve(__dirname, useAppActionsFile),
  regexp: {
    hooks: 'insert hook here',
    actions: 'insert actions here'
  },
  pathForHooksImport: {
    service: '@services/',
    widget: '@widgets/'
  }
}

