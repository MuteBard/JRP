import React, { Component } from 'react';
import '../app.scss';

class ContentCard4 extends Component {
    render() {
        return (
            <div className="contentcard4">

                <div className="cc4box cc4b1">
                    <div className="cc4innerb1">02</div>
                    <div className="cc4innerb2">PORTFOLIO</div>
                </div>
                <div className="cc4box cc4b2">
                    <div className="cc4innerb3">[IMAGE A]</div>
                    <div className="cc4innerb4">[IMAGE B]</div>
                    <div className="cc4innerb5">[IMAGE C]</div>
                </div>
                {/* <div className="dot">.</div> */}
            </div>
        );
    }
}

export default ContentCard4;