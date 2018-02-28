import React, { Component } from 'react';
import '../app.scss';

class ContentCard3 extends Component {
    render() {
        let illustrator = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609958/Illustrator_edxhxp.png'
        let animation = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609958/Illustrator_edxhxp.png'
        let photoshop = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609958/Photoshop_uy9i9k.png'
        let invision = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609956/Invision_mfqiv2.png'
        let css3 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609954/CSS3_dhvieh.png'
        let html5 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609948/HTML5_x2o2yb.png'
        let marvel = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609960/Marvel_xfofde.png'
        let sketch = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609965/Sketch_rmxxk2.png'   
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
                                <img src={animation} height="60px"/>
                            </div>
                            <div className="cc3lvl4b2">ANIMATION</div>
                        </div>
                        <div className="cc3lvl3b4">
                            <div className="img cc3lvl4b3">
                                <img src={html5} height="60px"/>
                            </div>
                            <div className="cc3lvl4b4">HTML</div>
                        </div>
                        <div className="cc3lvl3b5">
                            <div className="img cc3lvl4b5">
                                <img src={css3} height="60px"/>
                            </div>
                            <div className="cc3lvl4b6">CSS</div>
                        </div>
                        <div className="cc3lvl3b6">
                            <div className="img cc3lvl4b7">
                                <img src={sketch} height="60px"/>
                            </div>
                            <div className="cc3lvl4b8">SKETCH</div>
                        </div>
                        <div className="cc3lvl3b7">
                            <div className="img cc3lvl4b9">
                                <img src={invision} height="60px"/>
                            </div>
                            <div className="cc3lvl4b10">INVISION</div>
                        </div>
                        <div className="cc3lvl3b8">
                            <div className="img cc3lvl4b11">
                                <img src={illustrator} height="60px"/>
                            </div>
                            <div className="cc3lvl4b12">ILLUSTRATOR</div>                        
                        </div>
                        <div className="cc3lvl3b9">
                            <div className="img cc3lvl4b13">
                                <img src={photoshop} height="60px"/>
                            </div>
                            <div className="cc3lvl4b14">PHOTOSHOP</div>
                        </div>
                        <div className="cc3lvl3b10">
                            <div className="img cc3lvl4b15">
                                <img src={marvel} height="60px" width = "60px"/>
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