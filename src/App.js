import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import Heading from './Components/Header1';
import ContentCard1 from './Components/ContentCard1';
import ContentCard2 from './Components/ContentCard2';
import ContentCard4 from './Components/ContentCard4';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Heading/>
                <ContentCard1/>
                <ContentCard2/>
                <ContentCard4/>
            </div>
        );
    }
}

export default App;




