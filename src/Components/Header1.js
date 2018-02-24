import React, { Component } from 'react';
import '../app.scss';

class Heading1 extends Component {
    render() {
        return (
            <div className="heading1">
                <div className="box b1">
                   <div className ="innerb1"> R </div>
                </div>
                <div className="box b2">
                    <div className="box innerb2">HOME</div>
                    <div className="box innerb3">PORTFOLIO</div>
                    <div className="box innerb4">CONTACT</div>
                </div>
            </div>
        );
    }
}

export default Heading1;