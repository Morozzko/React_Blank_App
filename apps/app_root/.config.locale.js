const path = require('path')

const localesFolder = './src/app/localization/locales'

module.exports = {
  apiKey: 'AIzaSyAT2uFOrgZVvZTMmQPk7slY98d80BWcjtk',
  googleSheetID: '1vv3ZajyYLC_28y7OXxTLeJYWrwA1qj1DlGH686cg3qc',
  sheetName: 'Root',
  fileName: 'common.json',
  localesFolder: path.resolve(__dirname, localesFolder)
}
