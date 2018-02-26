import React, { Component } from 'react';
import '../app.scss';

class ContentCard4 extends Component {
    render() {
        return (
            <div className="contentcard4">

                <div className="cc4box cc4b1">
                    <div className="cc4lvl1b1">02</div>
                    <div className="cc4lvl1b2">PORTFOLIO</div>
                </div>
                <div className="cc4box cc4b2">
                    <div className="cc4lvl1b3">
                        <img src={`../../images/proj2.png`} height="350px"/>
                    </div>
                    <div className="cc4lvl1b4">
                        <img src={`../../images/proj3.png`} height="350px"/>
                    </div>
                    <div className="cc4lvl1b5">
                        <img src={`../../images/proj1.png`} height="350px"/>
                    </div>
                </div>
                {/* <div className="dot">.</div> */}
            </div>
        );
    }
}

export default ContentCard4;