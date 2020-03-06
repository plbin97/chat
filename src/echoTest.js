/**
 * Just an echo test for testing latency or connectivity
 * @param ws
 */
let echoTest = (ws) => {
    ws.on("message", (msg) => {
        if (msg === "ping") {
            ws.send("pong");
        }
    })
};
module.exports = echoTest;