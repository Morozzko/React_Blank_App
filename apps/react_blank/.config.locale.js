const path = require('path')

const localesFolder = './src/features/services/localization/locales'

module.exports = {
  apiKey: '',
  googleSheetID: '',
  localesFolder: path.resolve(__dirname, localesFolder)
}
