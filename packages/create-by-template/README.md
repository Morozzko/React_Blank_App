# Code gen helper for React Blank App architecture
#### Sample: https://github.com/Morozzko/React_Blank_App/tree/master/apps/react_blank
## Install

```
npm i @npm.piece/template-generator -D
```

```
yarn add @npm.piece/template-generator -D
```

## Generate by template and inject to useAppActions, ReducersList
```
new widget name
new service name
```
or
```
npm.piece-add widget name
npm.piece-add service name
```

## Remove from useAppActions, ReducersList, and feature directory
```
remove widget name
remove service name
```
or
```
npm.piece-remove widget name
npm.piece-remove service name
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
  // Путь до файлов useAppActions и reducersList
  filePath: {
    reducersList: path.resolve(__dirname, reducersFile),
    useAppActions: path.resolve(__dirname, useAppActionsFile)
  },
  regexp: {
    // После какого комментария вставлять данные для хука useAppActions 
    useAppActions: {
      hooks: 'insert hook here',
      actions: 'insert actions here'
    },
    // После какого комментария вставлять данные для файла reducers 
    reducersList: {
      service: 'Services: Начало',
      widget: 'Widgets: Начало'
    }
  },
  importPath: {
    // Приставка для импорта до папки service и widget из файла useAppActions
    useAppActions: {
      service: '@services/',
      widget: '@widgets/'
    },
    // Приставка для импорта до папки service и widget из файла reducers
    reducersList: {
      service: '@services/',
      widget: '@widgets/'
    }
  },
  // Путь до папки с примером для service и widget
  pathToTemplate: {
    service: path.resolve(__dirname, pathToServiceTemplate),
    widget: path.resolve(__dirname, pathToWidgetTemplate)
  },
  // Путь в какой папке создавать service и widget
  pathToPaste: {
    service: path.resolve(__dirname, pathToPasteService),
    widget: path.resolve(__dirname, pathToPasteWidget)
  },
  // Необязательное поле, запустит команду eslint fix после создания файлов
  eslintCommand: 'yarn run eslint'
}
```
