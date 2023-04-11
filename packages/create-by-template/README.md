# Code gen helper for React Blank App

## Install

```
npm i @npm.piece/template-generator
```

```
yarn add @npm.piece/template-generator
```

## Generate by template and inject to useAppActions, ReducersList
```
new widget name
new service name
```

## Remove from useAppActions, ReducersList, and feature directory
```
new widget name
new service name
```

## Create config file .config.template.js near package.json:

```javascript
const path = require('path')

const useAppActionsFile = './src/utils/hooks/useAppActions.ts'
const reducersFile = './src/app/store/reducers.ts'

const pathToWidgetTemplate = './src/features/widgets/_Sample'
const pathToServiceTemplate = './src/features/services/_sample'

const pathToPasteWidget = './src/features/widgets/'
const pathToPasteService = './src/features/services/'

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
  },
  pathToTemplate: {
    service: path.resolve(__dirname, pathToServiceTemplate),
    widget: path.resolve(__dirname, pathToWidgetTemplate)
  },
  pathToPaste: {
    service: path.resolve(__dirname, pathToPasteService),
    widget: path.resolve(__dirname, pathToPasteWidget)
  },
  eslintCommand: 'yarn run eslint'
}
```