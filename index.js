const core = require('@actions/core')
const github = require('@actions/github')

try {
    const secrets = core.getInput('secrets')
    console.log(secrets, github.context.payload)


} catch (error) {
    core.setFailed(error.message)
}
