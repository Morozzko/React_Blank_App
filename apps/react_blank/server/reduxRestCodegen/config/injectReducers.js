const fs = require('fs')
const path = require('path')
const { removeImportsFromFile } = require('../../utils/deleteImportsFromFile')
const { config } = require('../config/constants')

const reducersFile = path.resolve(__dirname, config.reducersImportDestination)
const foldersPath = path.resolve(__dirname, config.hooksFolder)

removeImportsFromFile(reducersFile)

function injectReducers(folderPath, filePath) {
	const storeRegex = /export\s*\{\s*injectedRtkApi\s*as\s*([a-zA-Z0-9_$]+)\s*\}/
	const fileNames = fs.readdirSync(folderPath)

	// Читаем содержимое файла

	const fileContent = fs.readFileSync(filePath, 'utf-8')

	let importStatements = ''
	let reducerStatements = `const ${config.reducersObjectName} = {\n`

	for (const fileName of fileNames) {
		if (fileName.endsWith('.ts')) {
			const fullPath = path.join(folderPath, fileName)
			const fileContent = fs.readFileSync(fullPath, 'utf-8')
			const match = fileContent.match(storeRegex)

			if (match) {
				const storeName = match[1]
				const fileNameWithoutTS = fileName.replace('.ts', '')
				const importStatement = `import { ${storeName} } from '${config.reducersImportFileSuffix}${fileNameWithoutTS}'\n`
				const reducerStatement = `[${storeName}.reducerPath]: ${storeName}.reducer, \n`
				importStatements += importStatement
				reducerStatements += reducerStatement
			}
		}
	}
	reducerStatements += '}\n'

	// Regex для поиска старого объекта старый объект
	const oldReducerRegex = new RegExp(
		`const\\s+${config.reducersObjectName}\\s*=\\s*{([\\s\\S]*?)}`
	)

	// Составляем новое содержимое файла с добавленными импортами и существующими данными
	const newFileContent = `${importStatements}\n\n\n${reducerStatements}\n\n${fileContent.replace(
		oldReducerRegex,
		''
	)}`

	// Записываем новое содержимое файла
	try {
		fs.writeFileSync(filePath, newFileContent, 'utf-8')
		console.log('\x1b[36m', 'Инъекция Reducers завершена', '\x1b[0m')
	} catch (error) {
		console.error(`Unable to write to file ${filePath}: ${error}`)
	}
}

injectReducers(foldersPath, reducersFile)
