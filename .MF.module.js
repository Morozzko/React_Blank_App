const path = require('path')

module.exports = {
  imported: {
    RenameImportedModuleHere: 'red@http://localhost:3002/remoteEntry.js',
  },
  exported: {
    './RenameExportedModuleHere': path.resolve(__dirname, 'src/modules/export/Exported'),
  },
}
