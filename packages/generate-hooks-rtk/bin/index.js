#!/usr/bin/env node
'use strict'

const { exec } = require('child_process')
const app = require('../dist')

process.on('unhandledRejection', err => {
	throw err
})

const execPromise = command =>
	new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				reject(error)

				return
			}
			if (stderr) {
				reject(new Error(stderr))

				return
			}
			resolve(stdout)
		})
	})

const startScript = async () => {
	const config = app.getConfig()

	await execPromise('npx @rtk-query/codegen-openapi openapi-config.ts')

	app.injectHooks(
		config.hooksFolder,
		config.exportFile,
		config.hooksImportFileSuffix
	)

	app.injectMiddleware(
		config.hooksFolder,
		config.middlewaresImportDestination,
		config.middlewaresImportFileSuffix,
		config.middlewaresObjectName
	)

	app.injectReducers(
		config.hooksFolder,
		config.reducersImportDestination,
		config.reducersImportFileSuffix,
		config.reducersObjectName
	)

	if (config.eslintCommand) {
		await exec(config.eslintCommand)
	}
}

startScript()
