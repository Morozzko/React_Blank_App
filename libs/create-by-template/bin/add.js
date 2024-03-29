#!/usr/bin/env node
'use strict'

const { exec } = require('child_process')
const path = require('path')
const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  const args = app.getArgs()
  const config = app.getConfig()

  if (args.type === 'service') {
    await app.createService({
      name: args.name,
      destination: path.join(config.pathToPaste.service, args.name),
      source: config.pathToTemplate.service,
    })
  }

  if (args.type === 'widget') {
    await app.createWidget({
      name: args.name,
      destination: path.join(config.pathToPaste.widget, args.name),
      source: config.pathToTemplate.widget,
    })
  }

  if (!args?.permissions?.includes(app.ARGEnum.noStore)) {
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

  if (config.eslintCommand) {
    await exec(config.eslintCommand)
  }
}

startScript()
