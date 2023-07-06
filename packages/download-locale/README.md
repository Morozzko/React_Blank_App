# Convert google sheet for i18n json file

## Install

```
npm i @npm.piece/locale-downloader -D
```

```
yarn add @npm.piece/locale-downloader -D
```

## Run command
```
npm.piece-locale-downloader
```

## Copy google sheet 
#### You can add more columns if you need
```
https://docs.google.com/spreadsheets/d/19fbHw20NyBTrllrqBJjFD99qGbXvUnurUOU0cNHMYsk/edit#gid=0
```

## Create config file .config.locale.js near package.json:

```javascript
const path = require('path')

const localesFolder = './src/features/services/localization/locales'

module.exports = {
  apiKey: '', // You can enable key https://console.cloud.google.com/apis/enableflow?apiid=sheets.googleapis.com
  googleSheetID: '19fbHw20NyBTrllrqBJjFD99qGbXvUnurUOU0cNHMYsk',
  sheetName: 'FirstPage',
  fileName: 'common.json',
  localesFolder: path.resolve(__dirname, localesFolder)
}
```
