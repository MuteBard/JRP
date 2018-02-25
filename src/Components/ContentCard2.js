import React, { Component } from 'react';
import '../app.scss';

class ContentCard2 extends Component {
    render() {
        return (
            <div className="contentcard2">
                <div className="cc2box cc2b1">[LOGO HERE]</div>
                <div className="cc2box cc2b2">
                    <div className="cc2lvl1b1">Hello</div>
                    <div className="cc2lvl1b2">Welcome to my page. I am a UX/UI Designer and Developer with 2 years of experience. My expertise ranges from bootstrap coding to user-centered design with react-native components.</div>
                </div>
                <div className="cc2box cc2b3">
                    <div className="cc2lvl1b3">DOWNLOAD RESUME</div>
                </div>
            </div>
        );
    }
}

export default ContentCard2;