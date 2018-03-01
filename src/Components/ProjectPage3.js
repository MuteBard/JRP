import React, { Component } from 'react';
import '../app.scss';

class ProjectPage3 extends Component {
    render() {
        let img1 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_2617aa752d5442c08f0c948bd8662af1_mv2_bhkp9g.png'
        let img2 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_0566f8c51c9645bda858842d2b5df13b_mv2_d_2448_3264_s_4_2_jwycd5.webp'
        let img3 = 'http://res.cloudinary.com/dtvznpuay/image/upload/a_90/v1519794024/93dec0_061d0271b05843f68df57f738302c205_mv2_d_3264_2448_s_4_2_yt4cey.webp'
        let img4 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794026/93dec0_ddfc08317e654da192171b4d76a32bfa_mv2_d_1800_1270_s_2_vbzrbt.png'
        let img5 = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519794025/93dec0_71df6b2cfae4409eaa6e3f87e4959004_mv2_wvnk4y.webp'
        
        return (
            <div className="ProjectPage3">
                <div className="pp3lvl1b1">
                    <div className="pp3lvl2b1">
                        <div className="pp3lvl3b1"><img src={img1} height="300px"/></div>
                    </div>
                    <div className="pp3lvl2b2">
                        <div className="pp3lvl3b2">
                            <div className="pp3lvl4b1">Brief</div>
                            <div className="pp3lvl4b2">Beyond The Classroom is a modern teaching tool to help teachers aid students in learning how to read better without their physical presence required.</div>
                        </div>
                        <div className="pp3lvl3b3">
                            <div className="pp3lvl4b3">Objective</div>
                            <div className="pp3lvl4b4">My objective with this app was to reinvent the Teacher and Student Video screens.</div>
                        </div>
                        <div className="pp3lvl3b4">
                            <div className="pp3lvl4b5">Approach</div>
                            <div className="pp3lvl4b6">I approached this with: firstly the teacher in mind and what the teacher would need to ensure the students success.</div>
                        </div>
                    </div>

                    <div className="pp3lvl2b3">

                        <div className="pp3lvl3b5">
                            <div className="pp3lvl4b7">
                                <div className="pp3lvl5b1">Wireframes</div>
                                <div className="pp3lvl5b2">Some lo-fi wireframes for the main two screens that I were responsible for.</div>
                            </div>
                            <div className="pp3lvl4b8">
                                <div className="pp3lvl5b3">
                                    <div className="pp3lvl6b1"><img src={img2} height="500px"/></div>
                                </div>
                                <div className="pp3lvl5b4">
                                    <div className="pp3lvl6b2"><img src={img3} height="500px"/></div>
                                </div>

                            </div>                        
                        </div>

                    </div>


 

                    <div className="pp3lvl2b4">
                        <div className="pp3lvl3b9">User Persona</div>
                        <div className="pp3lvl3b10"><img src={img4} height="120px"/></div>
                    </div>

                    <div className="pp3lvl2b5">
                        <div className="pp3lvl3b11">A color coded lexile chart for two avenues of understanding a student's reading level.</div>
                        <div className="pp3lvl3b12"><img src={img5} height="120px"/></div>
                    </div>

                    <div className="pp3lvl2b6">
                        <div className="pp3lvl3b13">Project Duration</div>
                        <div className="pp3lvl3b14">This project took about eight hours to complete. One hour to create a user persona. Five hours to gather research on the app and what should should be involved to give the teacher and student the confidence in this app. Two hours was given to the design and went through two iterations before the final product was given.</div>
                    </div>

                    <div className="pp3lvl2b7">
                        <div className="pp3lvl3b15">
                            <ul className="pp3lvl4b9">
                                <li>Recorder</li>
                                <li>Notebook and pencil</li>
                                <li>Trello Board</li>
                                <li>Sketch</li>
                                <li>Invision</li>
                                <li>Marvel POP</li>
                                <li>Lottie</li>
                                <li>Xtensio</li>
                            </ul>
                        </div>
                        <div className="pp3lvl3b16">
                            <ul className="pp3lvl4b10">
                                <li>Moodboarding</li>
                                <li>Guerrilla Tests</li>
                                <li>Personas</li>
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

export default ProjectPage3;