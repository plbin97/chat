import React from 'react';
import websocketTest from "./websocketTest";


class App extends React.Component{

    render() {
        return (
            <div>
                <button onClick={websocketTest}>Start</button>
            </div>
        );
    }
}

export default App;
