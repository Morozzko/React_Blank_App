const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const rootDir = './' // Укажите корневой каталог TurboRepo

function deleteNodeModules(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (
        entry.name === 'node_modules' ||
        entry.name === '.turbo' ||
        entry.name === 'dist' ||
        entry.name === 'build'
      ) {
        console.log(`Deleting ${fullPath}`)
        exec(`rm -rf ${fullPath}`, err => {
          if (err) {
            console.error(`Error deleting ${fullPath}:`, err)
          } else {
            console.log(`Successfully deleted ${fullPath}`)
          }
        })
      } else {
        deleteNodeModules(fullPath)
      }
    }
  }
}

deleteNodeModules(rootDir)
