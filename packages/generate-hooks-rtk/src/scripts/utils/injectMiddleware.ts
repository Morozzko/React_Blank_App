import fs from 'fs'
import path from 'path'
import { removeImportsFromFile } from './lib/deleteImportsFromFIle'

export const injectMiddleware = (
	folderPath: string,
	filePath: string,
	middlewaresImportFileSuffix: string,
	middlewaresObjectName: string
) => {
	removeImportsFromFile(filePath)

	const storeRegex = /export\s*\{\s*injectedRtkApi\s*as\s*([a-zA-Z0-9_$]+)\s*\}/
	const fileNames = fs.readdirSync(folderPath)

	const fileContent = fs.readFileSync(filePath, 'utf-8')

	let importStatements = ''
	let middlewaresStatements = `const ${middlewaresObjectName} = [ `

	for (const fileName of fileNames) {
		if (fileName.endsWith('.ts')) {
			const fullPath = path.join(folderPath, fileName)
			const fileContent = fs.readFileSync(fullPath, 'utf-8')
			const match = fileContent.match(storeRegex)

			if (match) {
				const storeName = match[1]
				const fileNameWithoutTS = fileName.replace('.ts', '')
				const importStatement = `import { ${storeName} } from '${middlewaresImportFileSuffix}${fileNameWithoutTS}'\n`
				const middlewaresStatement = `${storeName}.middleware,`
				importStatements += importStatement
				middlewaresStatements += middlewaresStatement
			}
		}
	}
	middlewaresStatements += ' ]\n'

	const oldMiddlewaresRegex = new RegExp(
		`const\\s+${middlewaresObjectName}\\s*=\\s*\\[([\\s\\S]*?)\\]`
	)

	const newFileContent = `${importStatements}\n\n\n${middlewaresStatements}\n\n${fileContent.replace(
		oldMiddlewaresRegex,
		''
	)}`

	try {
		fs.writeFileSync(filePath, newFileContent, 'utf-8')
		console.log('\x1b[36m', 'Middlewares were injected', '\x1b[0m')
	} catch (error) {
		console.error(`Unable to write to file ${filePath}: ${error}`)
	}
}
