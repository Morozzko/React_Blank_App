#!/usr/bin/env node
'use strict'

const path = require('path')
const app = require('../dist')

process.on('unhandledRejection', err => {
  throw err
})

const startScript = async () => {
  const config = app.getConfig()
  const dictionary = app.downloadGoogleSheet()
}

startScript()
