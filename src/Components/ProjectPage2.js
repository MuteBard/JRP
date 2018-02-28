import React, { Component } from 'react';
import '../app.scss';

class ProjectPage2 extends Component {
    render() {
        let img1 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794026/93dec0_f4c3ab7f3d994f6db18e23325bd46dd7_mv2_w4egjd.png'
        let img2 = 'http://res.cloudinary.com/dtvznpuay/image/upload/a_270/v1519794026/93dec0_e37b95260f18409f9694334f2a33842f_mv2_d_4032_3024_s_4_2_qwx1ft.webp'
        let img3 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_63e5cb09486e49248bf49d115b20f376_mv2_uuvpxl.png'

        return (
            <div className="ProjectPage2">
                <div className="pp2lvl1b1">
                    <div className="pp2lvl2b1">
                        <div className="pp2lvl3b1"><img src={img1} height="120px"/></div>
                        <div className="pp2lvl3b2">Wrecktech</div>            
                    </div>
                    <div className="pp1lvl2b2">
                        <div className="pp1lvl3b3">
                            <div className="pp1lvl4b1">Brief</div>
                            <div className="pp1lvl4b2">This company specializes in the buying and selling of used tech in demand. </div>
                        </div>
                        <div className="pp1lvl3b4">
                            <div className="pp1lvl4b3">Objective</div>
                            <div className="pp1lvl4b4">The company I work for decided to give one of our clients a quick complimentary landing page once we figured they did not have one yet. </div>
                        </div>
                        <div className="pp1lvl3b5">
                            <div className="pp1lvl4b5">Approach</div>
                            <div className="pp1lvl4b6">I learned with startups the importance of potential. I made a simple and effective design that allowed for content to be published at any given time. My approach was with the thought of them growing in substance.</div>
                        </div>
                    </div>
                    <div className="pp2lvl2b3">
                        <div className="pp1lvl3b6">Research</div>
                        <div className="pp1lvl3b7">I started this project off with some research to see what makes a 'good' landing page. I continued with these three questions: "Who are we?" "What do we do?" "How do we do it?". These three questions inspired the direct approach for their quick site. </div>
                    </div>
                    <div className="pp2lvl2b4">
                        <div className="pp1lvl3b8">Wireframes</div>
                        <div className="pp1lvl3b9">This was the second wireframe iteration after the 7th hour.</div>
                        <div className="pp1lvl3b10">
                            <div className="pp1lvl3b10"><img src={img2} height="120px"/></div>
                        </div>
                    </div>
                    <div className="pp2lvl2b5">
                        <div className="pp1lvl3b10">Heuristics</div>
                        <div className="pp1lvl3b11">This was the evaluation of UI flow and its consistency. "How do we stack up?", "Where can we improve?". We keep this evaluation as a checklist on a trello board.</div>
                        <div className="pp1lvl3b10">
                            <div className="pp1lvl3b10"><img src={img3} height="120px"/></div>
                        </div>
                    </div>

                    <div className="pp1lvl2b7">
                        <div className="pp1lvl3b11">Project Duration</div>
                        <div className="pp1lvl3b12">This project was fun and short-lived. This project took 15 hours to complete. Most of the time was in placement of content and which pictures to use. (lol)</div>
                        
                    </div>
                    <div className="pp1lvl2b8">
                        <div className="pp1lvl3b13">
                            <div className="pp1lvl4b21">Tools Used</div>
                            <ul className="pp1lvl4b7">
                                <li>Notebook and pencil</li>
                                <li>Trello Board</li>
                                <li>Sketch</li>
                                <li>Invision</li>
                            </ul>
                        </div>
                        <div className="pp1lvl3b14">
                            <div className="pp1lvl4b23">Methodologies</div>
                            <ul className="pp1lvl4b8">
                                <li>Moodboarding</li>
                                <li>Extensive Market Research</li>
                                <li>Sketching</li>
                                <li>Journey Map</li>
                                <li>Wireframes: Low-fidelity & High-fidelity</li>
                                <li>Prototyping</li>
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

export default ProjectPage2;