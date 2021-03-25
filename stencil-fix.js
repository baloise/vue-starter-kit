const glob = require('glob')
const fs = require('fs')

const VITE_IGNORE = '/* @vite-ignore */'
const WEBPACK_LAZY = '/* webpackMode: "lazy" */'
const WHITESPACE = '    '
const NEWLINE = '\n'

async function main() {
  try {
    const filterFilePaths = await scan('node_modules/.vite/chunk*.js')
    const fileContents = filterFilePaths.map(readSync)

    let index
    for (index = 0; index < fileContents.length; index++) {
      const content = fileContents[index]
      if (content.includes('@stencil/core')) {
        break
      }
    }

    const filePath = filterFilePaths[index]
    let fileContent = fileContents[index]

    if (fileContent.includes(VITE_IGNORE)) {
      return
    }

    fileContent = fileContent.replace(
      WEBPACK_LAZY,
      WEBPACK_LAZY + NEWLINE + WHITESPACE + VITE_IGNORE,
    )

    await write(filePath, fileContent)
  } catch (_) {
    // fails silently, because it only removes a warning
  }
}

const scan = async (filePath) => {
  return new Promise((resolve, reject) => {
    glob(filePath, (err, filterFilePaths) => {
      if (err) {
        return reject(err)
      }
      resolve(filterFilePaths)
    })
  })
}

const readSync = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    return null
  }
}

const write = async (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}

module.exports = main
