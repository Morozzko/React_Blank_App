const fs = require('fs').promises
const path = require('path')
const semver = require('semver')

async function scanDirectory(directory, excluded, callback) {
  const files = await fs.readdir(directory)

  for (const file of files) {
    const filePath = path.join(directory, file)
    const stats = await fs.stat(filePath)

    if (stats.isDirectory()) {
      if (!excluded.includes(file)) {
        await scanDirectory(filePath, excluded, callback)
      }
    } else if (file === 'package.json') {
      callback(filePath)
    }
  }
}

function sortObject(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      result[key] = obj[key]

      return result
    }, {})
}

async function findPackageJsonFiles(rootPath) {
  const excludedDirs = ['node_modules', 'build', 'dist']
  const packageJsonFiles = []

  await scanDirectory(rootPath, excludedDirs, filePath => {
    packageJsonFiles.push(filePath)
  })

  return packageJsonFiles
}

async function createConfigJson(rootPath, configPath) {
  const packageJsonPaths = await findPackageJsonFiles(rootPath)
  const relativePaths = packageJsonPaths.map(p => path.relative(rootPath, p))

  const data = {
    files: relativePaths,
  }

  await fs.writeFile(configPath, JSON.stringify(data, null, 2))

  console.log('config.json has been successfully created')
}

async function readPackageJson(filePath) {
  const data = await fs.readFile(filePath, 'utf-8')

  return JSON.parse(data)
}

async function updateConfigFile(config, configPath) {
  await fs.writeFile(configPath, JSON.stringify(config, null, 2))
  console.log(`${configPath} has been successfully updated`)
}

async function searchVersions(configPath) {
  const config = await readPackageJson(configPath)

  config.dependencies = config.dependencies || {}

  for (const relativePath of config.files) {
    const filePath = path.join(path.dirname(configPath), relativePath)
    const packageJson = await readPackageJson(filePath)

    const allDependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }

    for (const [dep, version] of Object.entries(allDependencies)) {
      const existingVersion = config.dependencies[dep]
      const coercedVersion = semver.coerce(version)
      const coercedExistingVersion = semver.coerce(existingVersion)
      if (
        !existingVersion ||
        (coercedVersion &&
          coercedExistingVersion &&
          semver.gt(coercedVersion, coercedExistingVersion))
      ) {
        config.dependencies[dep] = version
      }
    }
  }

  await updateConfigFile(config, configPath)
}
async function updateConfigWithPackageVersion(configPath) {
  const config = await readPackageJson(configPath)

  for (const relativePath of config.files) {
    const filePath = path.join(path.dirname(configPath), relativePath)
    const packageJson = await readPackageJson(filePath)

    if (packageJson?.name && packageJson?.version) {
      const cleanPackageVersion = packageJson.version.replace('^', '')
      const cleanConfigVersion =
        config.dependencies[packageJson.name]?.replace('^', '') || ''
      if (
        semver.valid(cleanPackageVersion) &&
        semver.valid(cleanConfigVersion) &&
        semver.gt(cleanPackageVersion, cleanConfigVersion)
      ) {
        config.dependencies[packageJson.name] = `^${cleanPackageVersion}`
        console.log(
          `Updated ${packageJson.name} to ${
            config.dependencies[packageJson.name]
          } in config.json`
        )
      }
    }
  }

  await updateConfigFile(config, configPath)

  console.log('config.json has been successfully updated')
}
async function updatePackageVersions(configPath) {
  const config = await readPackageJson(configPath)

  for (const relativePath of config.files) {
    const filePath = path.join(path.dirname(configPath), relativePath)
    const packageJson = await readPackageJson(filePath)
    let isUpdated = false

    if (packageJson?.dependencies) {
      for (const [dep, version] of Object.entries(packageJson.dependencies)) {
        const cleanVersion = version.replace('^', '')
        const cleanConfigVersion =
          config.dependencies[dep]?.replace('^', '') || ''
        if (
          cleanVersion !== '*' &&
          semver.valid(cleanVersion) &&
          semver.valid(cleanConfigVersion) &&
          semver.lt(cleanVersion, cleanConfigVersion)
        ) {
          packageJson.dependencies[dep] = `^${cleanConfigVersion}`
          console.log(
            `Updated ${dep} to ${packageJson.dependencies[dep]} in ${packageJson.name}`
          )
          isUpdated = true
        }
      }
    }

    if (packageJson?.devDependencies) {
      for (const [dep, version] of Object.entries(
        packageJson.devDependencies
      )) {
        const cleanVersion = version.replace('^', '')
        const cleanConfigVersion =
          config.dependencies[dep]?.replace('^', '') || ''
        if (
          cleanVersion !== '*' &&
          semver.valid(cleanVersion) &&
          semver.valid(cleanConfigVersion) &&
          semver.lt(cleanVersion, cleanConfigVersion)
        ) {
          packageJson.devDependencies[dep] = `^${cleanConfigVersion}`
          console.log(
            `Updated ${dep} to ${packageJson.devDependencies[dep]} in ${packageJson.name}`
          )
          isUpdated = true
        }
      }
    }

    if (isUpdated) {
      packageJson.version = semver.inc(packageJson.version, 'patch')
      console.log(
        `Version of ${packageJson.name} is increased to ${packageJson.version}`
      )
      await fs.writeFile(filePath, JSON.stringify(packageJson, null, 2))
    }
  }

  console.log('All package.json files have been successfully updated')
}

async function sortConfigs(configPath) {
  const config = await readPackageJson(configPath)
  config.dependencies = sortObject(config.dependencies)
  await fs.writeFile(configPath, JSON.stringify(config, null, 2))
}
// Запуск функций, замените 'rootPath' на путь к корневой директории проекта
// и 'configPath' на путь к файлу config.json
const rootPath = path.resolve(__dirname, '../../../')
const configPath = path.resolve(__dirname, '../../../config.json')

createConfigJson(rootPath, configPath)
  .then(() => searchVersions(configPath))
  .then(() => updateConfigWithPackageVersion(configPath))
  .then(() => sortConfigs(configPath))
  .then(() => updatePackageVersions(configPath))
  .catch(err => console.error(err))
