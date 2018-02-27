import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import Heading from './Components/Header1';
import ContentCard1 from './Components/ContentCard1';
import ContentCard2 from './Components/ContentCard2';
import ContentCard3 from './Components/ContentCard3';
import ContentCard4 from './Components/ContentCard4';
import ContentCard5 from './Components/ContentCard5';
import ContentCard6 from './Components/ContentCard6';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className ="card1">
                    <Heading/>
                    <ContentCard1/>
                </div>
                <div className ="card2">
                    <ContentCard2/>
                    <ContentCard3/>
                </div>
                <div className ="card3">    
                    <ContentCard4/>
                    <ContentCard5/>
                    <ContentCard6/>
                </div>
            </div>
        );
    }
}

export default App;




