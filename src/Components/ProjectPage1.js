import React, { Component } from 'react';
import '../app.scss';
import '../App.css';

class ProjectPage1 extends Component {
    render() {
        let phoneimg1 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794024/93dec0_14a820510d994ac19172a8a423117747_mv2_p5qggn.png'
        let phoneimg2 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794024/93dec0_3e0381c1ebf64feb8dea681e98e75894_mv2_fdnhqj.png'
        let phoneimg3 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_a1b17f60a23448dab7ff3ad46c954548_mv2_runvuf.png'
        let phoneimg4 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794024/93dec0_6d08d9d8d9ae4217a12af01d1d7cc418_mv2_x6fnxx.png'
        let phoneimg5 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519870035/93dec0_b8f5dd515fa841f8b3f482cc843b5358_mv2_qhxrgi.png'
        let img1 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794026/93dec0_b62910150f05413fb7c6e242127affec_mv2_uzvdwi.png'
        let img2 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_301b01bd3f9d436990311a01fb31b331_mv2_towbyx.png'
        let img3 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794024/93dec0_9f788796a9884af5838bb987c99ef77e_mv2_d_4038_1798_s_2_kdnlyc.png'
        let img4 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_ddb24606efd048fab4027d5015cf615e_mv2_d_2448_3264_s_4_2_unqvga.webp'
        let img5 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_888e1b91fbd64e84997c9e08250e3502_mv2_d_3024_4032_s_4_2_sr8gpf.webp'

        return (
            <div className="ProjectPage1">
                <div className="pp1lvl1b1">
                    <div className="pp1lvl2b1">
                        <div className="pp1lvl3b1">GOOD</div>
                        <div className="pp1lvl3b2">SAMARITAN</div>
                    </div>
                    <div className="pp1lvl2b2">
                        <div className="pp1lvl3b3"><img src={phoneimg1} height="300px"/></div>
                        <div className="pp1lvl3b4"><img src={phoneimg2} height="300px"/></div>
                        <div className="pp1lvl3b5"><img src={phoneimg3} height="400px"/></div>
                        <div className="pp1lvl3b6"><img src={phoneimg4} height="300px"/></div>
                        <div className="pp1lvl3b7"><img src={phoneimg5} height="300px"/></div>
                    </div>
                    <div className="pp1lvl2b3">
                        <div className="pp1lvl3b8">
                            <div className="pp1lvl4b1">Brief</div>
                            <div className="pp1lvl4b2">Good Samaritan is an app that offers a solution for locating lost and found products. They commit to finding everything from lost items to lost pets. </div>
                        </div>
                        <div className="pp1lvl3b9">
                            <div className="pp1lvl4b3">Objective</div>
                            <div className="pp1lvl4b4">My objective with Good Samaritan was to give the client more confidence in what he paid for when it comes to user-based features and trustworthy design</div>
                        </div>
                        <div className="pp1lvl3b10">
                            <div className="pp1lvl4b5">Approach</div>
                            <div className="pp1lvl4b6">I approached this app with the emotional state of losing something special in mind firstly. That idea created the trustworthy, happy, and reliable design from the color scheme to the user flow.</div>
                        </div>
                    </div>

                    <div className="pp1lvl2b4">
                        <div className="pp1lvl3b11">
                            <div className="pp1lvl4b7">Research</div>
                            <div className="pp1lvl4b8">The Competitive analysis showed that the market were mostly for pets. This definitely was a plus for Good Samaritan since this app organically offered more features. The target audience were students and adults between the age of 20-35 with the trending pain points of either quickly running out of time or geographical inconvenience.</div>
                        </div>
                    </div>
                    

                    <div className="pp1lvl2b5">


                        <div className="pp1lvl3b12">
                            <div className="pp1lvl4b9">
                                <div className="pp1lvl5b1">Competitive Analysis</div>
                                <div className="pp1lvl5b2">While doing Market Research, I focused on strengths and weaknesses of each application and their market penetration. My source of strengths were from first-hand experience and my source of weaknesses were from first-hand experiences and app store reviews.</div>
                            </div>
                            <div className="pp1lvl4b10">
                                <div className="pp1lvl5b3"><img src={img1} height="1000px"/></div> 
                            </div>                        
                        </div>


                        <div className="pp1lvl3b13">
                            <div className="pp1lvl4b11">
                                <div className="pp1lvl5b4">User Personas</div>
                                <div className="pp1lvl5b5">While creating the user flow, I had to completely stop and backtrack out of the mindset of being the user. Focusing the attention of the target audience, I conducted interviews around the local college and high school. From the trends of answers given I created Kaas and Shane; two outliers inside the target audience.</div>
                            </div>
                            <div className="pp1lvl4b12">
                                <div className="pp1lvl5b6"><img src={img2} height="500px"/></div>
                            </div>                        
                        </div>


                        <div className="pp1lvl3b14">
                            <div className="pp1lvl4b13">
                                <div className="pp1lvl5b7">User Flow</div>
                                <div className="pp1lvl5b8">The original stakeholder interview and user testing session helped with the User Flow of Good Samaritan. 87% of users committed to looking for lost items while the other 13% committed to posting first</div>
                            </div>
                            <div className="pp1lvl4b14">
                                <div className="pp1lvl5b9"><img src={img3} height="300px"/></div>
                            </div>                        
                        </div>


                        <div className="pp1lvl3b15">
                            <div className="pp1lvl4b15">
                                <div className="pp1lvl5b10">Wireframes</div>
                                <div className="pp1lvl5b11">Some lo-fidelity wireframes for a few of the major screens before proceeding to mid-fidelity</div>
                            </div>
                            <div className="pp1lvl4b16">
                                <div className="pp1lvl5b12">
                                    <div className="pp1lvl6b1"><img src={img4} height="500px"/></div>
                                </div>
                                <div className="pp1lvl5b13">
                                    <div className="pp1lvl6b2"><img src={img5} height="500px"/></div>
                                </div>

                            </div>                        
                        </div>

                    </div>

                    <div className="pp1lvl2b6">
                        <div className="pp1lvl3b16">
                            <div className="pp1lvl4b17">Project Duration</div>
                            <div className="pp1lvl4b18">The project took a month and a half. Most of that time was spent tweaking the user interface format and color scheme.</div>
                        </div>
                    </div>

                    <div className="pp1lvl2b7">
                        <div className="pp1lvl3b18">
                            <div className="pp1lvl4b21">Tools Used</div>
                            <ul className="pp1lvl4b22">
                                <li>Recorder</li>
                                <li>Notebook and pencil</li>
                                <li>Trello Board</li>
                                <li>Sketch</li>
                                <li>Invision</li>
                                <li>Marvel POP</li>
                                <li>Photoshop</li>
                                <li>Lottie</li>
                                <li>Xtensio</li>
                                <li>usertesting.com</li>
                            </ul>
                        </div>
                        <div className="pp1lvl3b19">
                            <div className="pp1lvl4b23">Methodologies</div>
                            <ul className="pp1lvl4b24">
                                <li>Moodboarding</li>
                                <li>Guerrilla Tests</li>
                                <li>Personas</li>
                                <li>User Flows</li>
                                <li>Extensive Market Research</li>
                                <li>Sketching</li>
                                <li>Journey Map</li>
                                <li>Wireframes: Low-fidelity & High-fidelity</li>
                                <li>Prototyping</li>
                                <li>Comparative & Competitive Analysis</li>
                                <li>User Testing</li>
                                <li>Feedback</li>
                            </ul>
                        </div>
                    </div>                
                </div>
            </div>
        );
    }
}

export default ProjectPage1;