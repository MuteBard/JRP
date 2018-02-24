import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Components/Header1';
import ContentCard1 from './Components/ContentCard1';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Heading/>
                <ContentCard1/>
            </div>
        );
    }
}

export default App;




