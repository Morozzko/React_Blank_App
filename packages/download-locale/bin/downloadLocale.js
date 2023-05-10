#!/usr/bin/env node
'use strict'

const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  const config = app.getConfig()

  if (!config.apiKey) {
    throw new Error('Set api key for google api')
  }

  if (!config.googleSheetID) {
    throw new Error('Set googleSheetID for google xls file')
  }

  if (!config.localesFolder) {
    throw new Error('Set localesFolder')
  }

  if (!config.sheetName) {
    throw new Error('Set sheetName')
  }

  const link = `https://sheets.googleapis.com/v4/spreadsheets/${config.googleSheetID}/values/${config.sheetName}?key=${config.apiKey}`
  const editUrl = `https://docs.google.com/spreadsheets/d/${config.googleSheetID}/edit#gid=0`

  const googleSheet = await app.downloadGoogleSheet(link)
  const dictionaries = await app.createDictionary(googleSheet)
  Object.entries(dictionaries).forEach(([, dictionary]) => {
    app.createFile(dictionary, config.localesFolder, config.fileName)
  })

  console.log(
    '\x1b[31m',
    `Редактирование перевода доступно по ссылке ${editUrl}`,
    '\x1b[0m'
  )
}

startScript()
