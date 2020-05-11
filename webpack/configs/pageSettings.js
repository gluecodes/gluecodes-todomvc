const {
  lstatSync,
  readdirSync
} = require('fs')

const pagesPath = `${__dirname}/../../src/pages`

module.exports = readdirSync(pagesPath).reduce((acc, pageDirName) => [
  ...acc,
  ...(lstatSync(`${pagesPath}/${pageDirName}`).isDirectory() ? [{
    ...(require(`${__dirname}/../../src/pages/${pageDirName}/settings.js`)),
    bundleName: pageDirName
  }] : [])
], [])
