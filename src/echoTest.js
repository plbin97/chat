
let echoTest = (ws,req) => {
    console.log(req.params["par"]);
    ws.on("message", (msg) => {
        console.log(msg);
        ws.send(msg);
    })
    ws.on("close", (reasonCode, description) => {
        console.log("Closed: " + reasonCode + " | " + description);
    })
};
module.exports = echoTest;