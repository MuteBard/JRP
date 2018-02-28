import React, { Component } from 'react';
import '../app.scss';

class ContentCard4 extends Component {
    render() {
        let project1 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609959/proj2_dou9jt.png'
        let project2 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609959/proj3_vh7hzp.png'
        let project3 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609958/proj1_y7rifb.png'
        return (
            <div className="contentcard4">

                <div className="cc4box cc4b1">
                    <div className="cc4lvl1b1">02</div>
                    <div className="cc4lvl1b2">PORTFOLIO</div>
                </div>
                <div className="cc4box cc4b2">
                    <div className="cc4lvl1b3">
                        <img src={project1} height="350px"/>
                    </div>
                    <div className="cc4lvl1b4">
                        <img src={project2} height="350px"/>
                    </div>
                    <div className="cc4lvl1b5">
                        <img src={project3} height="350px"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentCard4;