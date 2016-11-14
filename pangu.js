const fs = require('fs')
const pangu = require('pangu')

const files = fs.readdirSync('./docs')

files.forEach((file) => {
  const path = `./docs/${file}`
  fs.writeFileSync(path, pangu.spacingFileSync(path))
})
