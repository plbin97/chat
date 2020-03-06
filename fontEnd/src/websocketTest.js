let websocketTest = () => {
    let client = new WebSocket('ws://localhost:4000/test', 'chat');

    client.onerror = function() {
        console.log('Connection Error');
    };

    client.onopen = function() {
        console.log('WebSocket Client Connected');
        client.send("ping");
    };

    client.onclose = function() {
        console.log('echo-protocol Client Closed');
    };

    client.onmessage = async function(event) {
        console.log(event.data);
    };
};

export default websocketTest;