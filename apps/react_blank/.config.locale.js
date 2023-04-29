const path = require('path')

const localesFolder = './src/features/services/localization/locales'

module.exports = {
  apiKey: '',
  googleSheetID: '19fbHw20NyBTrllrqBJjFD99qGbXvUnurUOU0cNHMYsk',
  sheetName: 'FirstPage',
  fileName: 'common.json',
  localesFolder: path.resolve(__dirname, localesFolder)
}