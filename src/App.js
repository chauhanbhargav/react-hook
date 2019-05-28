import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/List";

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={logo} className="App-logo" alt="logo"/>
            <List/>
        </div>
    );
}

export default App;
