#!/usr/bin/env node
'use strict'

const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  try {
    const config = app.getConfig()
    const { MFList, getProjectPath, config: globalConfig } = config

    Object.entries(MFList).forEach(([name, MF]) => {
      const path = getProjectPath(name)
      app.removeScriptTags(path)
      app.replaceNameInFile(path, name)

      app.changeENV(name, path, MFList, MF?.import || [], globalConfig)

      MF?.import?.forEach(imported => {
        const path = getProjectPath(name)

        app.addLineBefore(path, imported)
      })
    })

    console.log('MF configured')
  } catch (e) {
    console.log(e)
  }
}

startScript()
