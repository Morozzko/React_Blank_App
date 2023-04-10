#!/usr/bin/env node
'use strict'

const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  const args = app.getArgs()
  const config = app.getConfig()

  if (args.type === 'service') {
    console.log('@')
  }

  if (args.type === 'widget') {
    console.log('@')
  }

  await app.insertToReducer({
    name: args.name,
    pathToReducersList: config.filePath.reducersList,
    pathForImportReducers: config.importPath.reducersList[args.type],
    regexp: config.regexp.reducersList[args.type],
  })

  await app.insertToHooks({
    name: args.name,
    pathToHook: config.filePath.useAppActions,
    regexp: config.regexp.useAppActions,
    pathForImportHooks: config.importPath.useAppActions[args.type],
  })
}

startScript()
