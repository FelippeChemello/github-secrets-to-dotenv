const core = require('@actions/core')
const fs = require('fs')
const path = require('path')

try {
    const secrets = JSON.parse(core.getInput('secrets') || {})

    let data = ''

    for (const {key, value} of Object.entries(secrets)) {
        data += `${key}=${value}\n`
    }

    const file = path.resolve(__dirname, '..', '.env')

    fs.writeFileSync(file, data)

    core.info(`Wrote ${Object.keys(secrets).length} secrets to ${file}`)
    
    core.setOutput('filePath', file)
} catch (error) {
    core.setFailed(error.message)
}
