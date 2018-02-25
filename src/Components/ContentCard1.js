import React, { Component } from 'react';
import '../app.scss';

class ContentCard1 extends Component {
    render() {
        return (
            <div className="contentcard1">
                <div className="cc1box cc1b1">
                    <div className="cc1lvl1b1">I<span className ="makeGreen">'</span>M</div>
                    <div className="cc1lvl1b2">JOHNATHAN<br/>RAYMOND<span className ="makeGreen">.</span></div>
                </div>
                <div className="cc1box cc1b2">
                    <div className="cc1lvl1b3">UX/UI DESIGNER & WEB</div>
                    <div className="cc1lvl1b4">DEVELOPER</div>
                </div>
            </div>
        );
    }
}

export default ContentCard1;