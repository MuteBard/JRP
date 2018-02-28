import React, { Component } from 'react';
import '../app.scss';
import axios from 'axios';

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
        console.log("test1")
        this.setState({[item]: event.target.value}) 
    }

    saveEdit = (state) => (event) => {
        console.log("test2",state.name)
        let mail = {
            name : state.name,
            email : state.email,
            subject : state.subject,
            message : state.message
        }

        //https://github.com/axios/axios
        axios({
            method:'post',
            url:'http://localhost:4000/saveEdit',
            data: {
                mail: mail
              }
        }).then(response => {
            console.log('saved successfully')
            this.setState({ 
                name : '',
                email : '',
                subject : '',
                message : ''
            }) 

        }).catch(err => console.log(err))  

    }

    render() {
        let logo = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609957/Logo_xi46yv.png'
        let linkedinlogo = 'http://res.cloudinary.com/dtvznpuay/image/upload/v1519609950/in_jek9vp.png'
        let linkedinpage = 'https://www.linkedin.com/in/johnathan-raymond-083b32128/'
        return (
            <div className="contentcard6">
                <div className="cc6lvl1b1">
                    <div className="cc6lvl2b1">
                        <div className="cc6lvl3b1">
                            <div className="cc6lvl4b1">CONTACT</div>
                            <div className="cc6lvl4b2">Let's chill to some lo-fi</div>
                            <div className="cc6lvl4b3">info@johnathanraymond.com</div>
                            <div className="cc6lvl4b4">Tel: (678)-428-5263 </div>
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

                            <div className ="cc6button" type="button" onClick = {this.saveEdit(this.state)}>Send</div>
                        </div>
                    </div>
                    <div className="cc6lvl2b2">
                        <div className="cc6lvl3b3">
                            <a href={linkedinpage}><img src={linkedinlogo} height="35px"/></a>
                        </div>        
                    </div>
                </div>
                <div className = "cc6lvl1b2">
                    <a href="#"><img className = "cc6lvl2b3"src={logo} height="60px"/></a>
                </div>
            </div>
        );
    }
}

export default ContentCard6;