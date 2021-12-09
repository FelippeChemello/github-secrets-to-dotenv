const core = require('@actions/core')
const github = require('@actions/github')

try {
    const secrets = core.getInput('secrets')
    console.log(JSON.parse(secrets))


} catch (error) {
    core.setFailed(error.message)
}
