const fs = require('fs')
const path = require('path')

function removeImportsFromFile(filePath) {
	const fileContent = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')
	if (!fileContent) {
		throw new Error('File is empty')
	}

	const importRegexpA = /import\s+{[^}]+}\s+from\s+(['"]).+?\1\s*;?\s*[\r\n]*/gs
	const importRegexB = /import\s*{\s*[a-zA-Z0-9_,\s]+}\s*from\s*'\.\/.*';?\n?/g
	const updatedFileContent = fileContent
		.replace(importRegexpA, '')
		.replace(importRegexB, '')

	fs.writeFileSync(
		path.resolve(__dirname, filePath),
		updatedFileContent,
		'utf8'
	)
	console.log(`All imports removed from ${filePath}`)
}

module.exports = {
	removeImportsFromFile,
}
