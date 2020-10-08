/**
 * Just an echo test for testing latency or connectivity
 * @param ws
 */
let echoTest = (ws) => {
    ws.on("message", (msg) => {
        console.log(msg);
        ws.send(msg);
    })
    ws.on("close", (reasonCode, description) => {
        console.log("Closed: " + reasonCode + " | " + description);
    })
};
module.exports = echoTest;