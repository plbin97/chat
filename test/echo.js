let WebSocket = require('ws');
let config = require('../config');
let chai = require('chai');
describe("Echo testing", function () {
    it('Send ping', function (done) {
        let echoWs = new WebSocket('ws://127.0.0.1:' + config.listenOnPort + '/test');
        echoWs.on("open", function () {
            echoWs.send("ping");
        });
        echoWs.on("message", function (data) {
            chai.expect(data).to.equals("pong");
            echoWs.terminate();
            done();
        })
    });
});