const React, { useState } = require('react');
const Trainer = require('components/Trainer');

import './App.scss';

function App() {
    return (
        <div className="App">
        {/* <header className="App-header"> */}
            <h1>Invoker Practice</h1>
        {/* </header> */}
            <Trainer />
        </div>
    );
}

export default App;
