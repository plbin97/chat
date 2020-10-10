let chatMember = {};
let chatRoomTest = (ws) => {
    let id = Math.round(Math.random() * 100);
    chatMember[id] = {
        sendMsg: (msg) => {
            ws.send(msg);
        }
    }
    ws.on("message",(msg) => {
        for (let userId in chatMember) {
            if (userId !== id.toString()) {
                chatMember[userId].sendMsg(msg);
            }
        }
    });
    ws.on("close",() => {
        delete chatMember[id];
    })
}

module.exports = chatRoomTest;