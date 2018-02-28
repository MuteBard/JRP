import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';

import Homepage from './Components/HomePage';
import ProjectPage1 from './Components/ProjectPage1';
import ProjectPage2 from './Components/ProjectPage2';
import ProjectPage3 from './Components/ProjectPage3';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className ="card1">
                    <Homepage/>
                    <ProjectPage1/>
                    <ProjectPage2/>
                    <ProjectPage3/>
                </div>
            </div>
        );
    }
}

export default App;




