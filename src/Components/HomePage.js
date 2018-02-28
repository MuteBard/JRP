import React, { Component } from 'react';
import '../app.scss';
import '../App.css';
import Heading from './Header1';
import ContentCard1 from './ContentCard1';
import ContentCard2 from './ContentCard2';
import ContentCard3 from './ContentCard3';
import ContentCard4 from './ContentCard4';
import ContentCard5 from './ContentCard5';
import ContentCard6 from './ContentCard6';
class HomePage extends Component {
    render() {
        return (
            <div className="Homepage">
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

export default HomePage;