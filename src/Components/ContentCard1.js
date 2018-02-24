import React, { Component } from 'react';
import '../app.scss';

class ContentCard1 extends Component {
    render() {
        return (
            <div className="contentcard1">
                <div className="cc1box cc1b1">
                    <div className="cc1innerb1">I<span className ="makeGreen">'</span>M</div>
                    <div className="cc1innerb2">JOHNATHAN<br/>RAYMOND<span className ="makeGreen">.</span></div>
                </div>
                <div className="cc1box cc1b2">
                    <div className="cc1innerb3">UX/UI DESIGNER & WEB</div>
                    <div className="cc1innerb4">DEVELOPER</div>
                </div>
            </div>
        );
    }
}

export default ContentCard1;