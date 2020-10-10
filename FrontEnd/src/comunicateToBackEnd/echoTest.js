import {webSocketUrl} from "../../config";

class EchoTest {
    constructor() {
    }

    initializeEcho() {
        return new Promise((resolve) => {
            this.ws = new WebSocket(webSocketUrl);
            this.ws.onmessage = (event) => {
                this.voicePackageHandler(event.data);
            }
            this.ws.onopen = () => {
                resolve();
            }
        })
    }

    async sendVoicePackage(blob){
        this.ws.send(blob);
    }

    async settingReceiveVoicePackage(handler) {
        this.voicePackageHandler = handler;
    }

}

export default EchoTest;