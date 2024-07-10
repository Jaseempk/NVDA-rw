const requestConfig = require("../configs/alpacaMintConfig")
const { simulateScript, decodeResult } = require("@chainlink/functions-toolkit")

async function main() {
    const { responseBytesHexstring, errorString, capturedTerminalOutput } = await simulateScript(requestConfig)
    console.log(capturedTerminalOutput)

    if (responseBytesHexstring) {
        console.log(`Response returned by script during local simulation ${decodeResult(responseBytesHexstring, requestConfig.expectedReturnType).toString()}\n`)
    }
    if (errorString) {
        console.log(`Error returned by simulated script: \n${errorString}\n`)
    }
}
main().catch((error) => {
    console.log(error)
    process.exit(1)
})