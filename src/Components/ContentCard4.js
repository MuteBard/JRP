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
                    <div className="cc4lvl1b3">[IMAGE A]</div>
                    <div className="cc4lvl1b4">[IMAGE B]</div>
                    <div className="cc4lvl1b5">[IMAGE C]</div>
                </div>
                {/* <div className="dot">.</div> */}
            </div>
        );
    }
}

export default ContentCard4;