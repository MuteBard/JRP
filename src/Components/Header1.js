import React, { Component } from 'react';
import '../app.scss';

class Heading1 extends Component {
    render() {
        return (
            <div className="heading1">
                <div className="h1box h1b1">
                    <div className ="h1innerb1"> 
                        <img src={`http://res.cloudinary.com/dtvznpuay/image/upload/v1519609957/Logo_xi46yv.png`} height="45px"/>
                    </div>
                </div>
                <div className="h1box h1b2">
                    <div className="h1box h1innerb2">HOME</div>
                    <div className="h1box h1innerb3">PORTFOLIO</div>
                    <div className="h1box h1innerb4">CONTACT</div>
                </div>
            </div>
        );
    }
}

export default Heading1;