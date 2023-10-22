const path = require("path");

module.exports = {
  imported: {},
  exported: {
    './AuthContainer': path.resolve(__dirname, 'src/modules/export/Exported'),
    './AuthService': path.resolve(__dirname, 'src/modules/export/AuthService'),
  },
}
