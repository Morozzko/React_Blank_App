import fs from 'fs'
import path from 'path'
import { removeImportsFromFile } from './lib/deleteImportsFromFIle'

export const injectHooks = (
  folderPath: string,
  importFilePath: string,
  hooksImportFileSuffix: string
) => {
  const hooksRegExp = /use(\w+)Mutation|use(\w+)Query/g
  const imports: string[] = []

  const files = fs.readdirSync(folderPath)

  files.forEach(file => {
    const filePath = path.join(folderPath, file)

    if (path.extname(filePath) !== '.ts') {
      return
    }

    const data = fs.readFileSync(filePath, 'utf8')
    const lines = data.split('\n').reverse()

    const injectedRtkApiIndex = lines.findIndex(line => {
      const trimmedLine = line.trim()

      return (
        trimmedLine.endsWith('} = injectedRtkApi') ||
        trimmedLine.endsWith('} = injectedRtkApi;')
      )
    })

    const hooks: string[] = []
    for (let i = injectedRtkApiIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.startsWith('export const {')) {
        break
      }
      let match
      while ((match = hooksRegExp.exec(line)) !== null) {
        hooks.push(match[0])
      }
    }

    const injectedRtkApiStartIndex = lines.findIndex(line => {
      const trimmedLine = line.trim()

      return trimmedLine.startsWith('export const {')
    })

    const injectedRtkApiEndIndex = lines.findIndex(line => {
      const trimmedLine = line.trim()

      return (
        trimmedLine.endsWith('} = injectedRtkApi') ||
        trimmedLine.endsWith('} = injectedRtkApi;')
      )
    })

    for (let i = injectedRtkApiStartIndex; i <= injectedRtkApiEndIndex; i++) {
      const line = lines[i].trim()
      let match
      while ((match = hooksRegExp.exec(line)) !== null) {
        hooks.push(match[0])
      }
    }

    if (hooks.length > 0) {
      imports.push(
        `import { ${hooks.join(
          ', '
        )} } from '${hooksImportFileSuffix}${path.basename(filePath, '.ts')}';`
      )
    }
  })

  removeImportsFromFile(importFilePath)
  const data = fs.readFileSync(importFilePath, 'utf8')
  if (imports.length > 0) {
    fs.writeFileSync(importFilePath, `${imports.join('\n')}\n${data}`, 'utf8')
    console.log('\x1b[36m', 'Hook were injected', '\x1b[0m')
  }
}
