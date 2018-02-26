import React, { Component } from 'react';
import '../app.scss';

class ContentCard6 extends Component {
    render() {
        return (
            <div className="contentcard6">
                <div className="cc6lvl1b1">
                    <div className="cc6lvl2b1">
                        <div className="cc6lvl3b1">
                            <div className="cc6lvl4b1">CONTACT</div>
                            <div className="cc6lvl4b2">Let's chill to some lo-fi</div>
                            <div className="cc6lvl4b3">info@johnathanraymond.com</div>
                            <div className="cc6lvl4b4">Tel: (678)-428-5263</div>
                        </div>
                        <div className="cc6lvl3b2">
                            <div className="cc6lvl4b5">
                                <div className="cc6lvl5b1">
                                    <input className="searchb1"  placeholder="Name*" type="text" value={"Name*"}/>
                                </div>
                                <div className="cc6lvl5b2">
                                    <input className="searchb1"  placeholder="Email*" type="text" value={"Email*"}/>
                                </div>
                            </div>
                            <div className="cc6lvl4b6">
                                <input className="searchb2"  placeholder="Subject" type="text" value={"Subject"}/>
                            </div>
                            <div className="cc6lvl4b7">
                                <textarea className="searchb3" placeholder="Message" cols="40" rows="5" value={"Message"}></textarea>
                            </div>
                            <div className="cc6lvl4b8">Send</div>
                        </div>
                    </div>
                    <div className="cc6lvl2b2">
                        <div className="cc6lvl3b3">
                            <img src={`../../images/in.png`} height="35px"/>
                        </div>        
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentCard6;