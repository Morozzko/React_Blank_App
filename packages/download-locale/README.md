# Code gen helper for React Blank App

## Install

```
npm i @npm.piece/download-locale
```

```
yarn add @npm.piece/download-locale
```

## Run command
```
npm.piece-download-locale
```


## Create config file .config.locale.js near package.json:

```javascript
const path = require('path')

const localesFolder = './src/features/services/localization/locales'

module.exports = {
  apiKey: '',
  googleSheetID: '',
  localesFolder: path.resolve(__dirname, localesFolder)
}
```
