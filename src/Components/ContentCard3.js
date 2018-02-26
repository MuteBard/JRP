import React, { Component } from 'react';
import '../app.scss';

class ContentCard3 extends Component {
    render() {
        return (
            <div className="contentcard3">

                <div className="cc3lvl1b1">
                    <div className="cc3lvl2b1">
                        <div className="cc3lvl3b1">01</div>
                        <div className="cc3lvl3b2">PROFESSIONAL</div>
                    </div>

                    <div className="cc3lvl2b2">MY&nbsp;&nbsp;KNOWLEDGE&nbsp;&nbsp;LEVEL&nbsp;&nbsp;IN&nbsp;&nbsp;SOFTWARE</div>

                    <div className="cc3lvl2b3">
                        <div className="cc3lvl3b3">
                            <div className="img cc3lvl4b1">
                                <img src={`../../images/Illustrator.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b2">ANIMATION</div>
                        </div>
                        <div className="cc3lvl3b4">
                            <div className="img cc3lvl4b3">
                                <img src={`../../images/HTML5.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b4">HTML</div>
                        </div>
                        <div className="cc3lvl3b5">
                            <div className="img cc3lvl4b5">
                                <img src={`../../images/CSS3.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b6">CSS</div>
                        </div>
                        <div className="cc3lvl3b6">
                            <div className="img cc3lvl4b7">
                                <img src={`../../images/Sketch.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b8">SKETCH</div>
                        </div>
                        <div className="cc3lvl3b7">
                            <div className="img cc3lvl4b9">
                                <img src={`../../images/Invision.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b10">INVISION</div>
                        </div>
                        <div className="cc3lvl3b8">
                            <div className="img cc3lvl4b11">
                                <img src={`../../images/Illustrator.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b12">ILLUSTRATOR</div>                        
                        </div>
                        <div className="cc3lvl3b9">
                            <div className="img cc3lvl4b13">
                                <img src={`../../images/Photoshop.png`} height="60px"/>
                            </div>
                            <div className="cc3lvl4b14">PHOTOSHOP</div>
                        </div>
                        <div className="cc3lvl3b10">
                            <div className="img cc3lvl4b15">
                                <img src={`../../images/Marvel.png`} height="60px" width = "60px"/>
                            </div>
                            <div className="cc3lvl4b16">MARVEL</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default ContentCard3;