import React, { useState } from 'react';
import './App.scss';
import Trainer from './components/Trainer'

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
