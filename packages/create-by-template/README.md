# Code gen helper for React Blank App

## Install

```
npm i @npm.piece/template-generator
```

```
yarn add @npm.piece/template-generator
```

## Create config file .config.template.js near package.json:

```javascript
const path = require('path')

const useAppActionsFile = './src/utils/hooks/useAppActions.ts'
const reducersFile = './src/app/store/reducers.ts'

module.exports = {
  reducersList: path.resolve(__dirname, reducersFile),
  useAppActions: path.resolve(__dirname, useAppActionsFile),
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
  pathForHooksImport: {
    service: '@services/',
    widget: '@widgets/'
  }
}
```
