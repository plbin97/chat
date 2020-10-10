import {webSocketUrl} from "../../config";

class ComunicateToBackEnd {
    constructor() {
        this.ws = new WebSocket(webSocketUrl);
        this.ws.onopen = this.webScoketOnOpen;
        this.ws.onclose = this.webSocketOnClose;
        this.ws.onmessage = this.webSocketOnMessage;
    }

    async webScoketOnOpen(event) {

    }

    async webSocketOnClose(event) {

    }

    async webSocketOnMessage(event) {

    }

}

export default ComunicateToBackEnd;