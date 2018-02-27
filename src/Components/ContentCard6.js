import React, { Component } from 'react';
import '../app.scss';

//https://reactjs.org/docs/forms.html
//https://alligator.io/react/new-way-to-handle-events/
class ContentCard6 extends Component {
    constructor(){
        super();
        this.state = {
          name: '',
          email: '',
          subject: '',
          message: ''  
        }
    }

    edit = (item) => (event) => {
        this.setState({[item]: event.target.value}) 
    }

    saveEdit(event){

    }

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
                                    <input className="searchb1" placeholder="Name*" type="text" onChange = {this.edit('name')} value = {this.state.name}/>
                                </div>
                                <div className="cc6lvl5b2">
                                    <input className="searchb1" placeholder="Email*" type="text" onChange = {this.edit('email')} value = {this.state.email}/>
                                </div>
                            </div>
                            <div className="cc6lvl4b6">
                                <input className="searchb2" placeholder="Subject*" type="text" onChange = {this.edit('subject')} value = {this.state.subject}/>
                            </div>
                            <div className="cc6lvl4b7">
                                <textarea className="searchb3" placeholder="Message*" cols="40" rows="5" onChange = {this.edit('message')} value = {this.state.message}/>
                            </div>
                            <button className="cc6lvl4b8" type="button" onClick={this.saveEdit}>Send</button>
                        </div>
                    </div>
                    <div className="cc6lvl2b2">
                        <div className="cc6lvl3b3">
                            <img src={`../../images/in.png`} height="35px"/>
                        </div>        
                    </div>
                </div>
                <div className = "cc6lvl1b2">
                    <img className = "cc6lvl2b3"src={`http://res.cloudinary.com/dtvznpuay/image/upload/v1519609957/Logo_xi46yv.png`} height="60px"/>
                </div>
            </div>
        );
    }
}

export default ContentCard6;