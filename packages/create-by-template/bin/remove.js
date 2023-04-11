#!/usr/bin/env node
'use strict'

const { exec } = require('child_process')
const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  const args = app.getArgs()
  const config = app.getConfig()

  if (args.type === 'service') {
    await app.removeService({
      name: args.name,
      destination: config.pathToPaste.service,
    })
  }

  if (args.type === 'widget') {
    await app.removeWidget({
      name: args.name,
      destination: config.pathToPaste.widget,
    })
  }

  await app.removeFromReducer({
    name: args.name,
    pathToReducersList: config.filePath.reducersList,
  })

  await app.removeFromHooks({
    name: args.name,
    pathToFile: config.filePath.useAppActions,
  })

  if (config.eslintCommand) {
    await exec(config.eslintCommand)
  }
}

startScript()
