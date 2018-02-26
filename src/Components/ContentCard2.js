import React, { Component } from 'react';
import '../app.scss';

class ContentCard2 extends Component {
    render() {
        return (
            <div className="contentcard2">
                <div className="cc2lvl1b1">
                    <div className="cc2lvl2b1">
                        <div className="cc2lvl3b1">
                            <img src={`http://res.cloudinary.com/dtvznpuay/image/upload/v1519609957/Logo_xi46yv.png`} height="80px"/>
                        </div>
                    </div>
                    <div className="cc2lvl2b2">
                        <div className="cc2lvl3b2">Hello</div>
                        <div className="cc2lvl3b3">Welcome to my page. I am a UX/UI Designer and Developer with 2 years of experience. My expertise ranges from bootstrap coding to user-centered design with react-native components.</div>
                    </div>
                    <div className="cc2lvl2b3">
                        <div className="cc2lvl3b4">DOWNLOAD RESUME</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentCard2;