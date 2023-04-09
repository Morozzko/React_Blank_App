#!/usr/bin/env node
'use strict'

const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  const args = app.getArgs()
  const config = app.getConfig()

  await app.insertToHooks({
    name: args.name,
    pathToHook: config.useAppActions,
    regexp: config.regexp,
    pathForImportHooks: config.pathForHooksImport[args.type],
  })
}

startScript()
