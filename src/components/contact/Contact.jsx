import "./contact.scss"
import React from 'react';
<<<<<<< HEAD
import { useState } from "react";
import axios from 'axios';

export default function Contact() {
    const [status, setStatus] = useState({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
      email: '',
      name: '',
      message: '',
    });
    const handleServerResponse = (ok, msg) => {
      if (ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: msg },
        });
        setInputs({
          email: '',
          name: '',
          message: '',
        });
      } else {
        setStatus({
          info: { error: true, msg: msg },
        });
      }
    };
    const handleOnChange = (e) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    };
    const handleOnSubmit = (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: 'POST',
        url: 'https://formspree.io/f/xknylvee',
        data: inputs,
      })
        .then((response) => {
          handleServerResponse(
            true,
            'Thank you, your message has been submitted.',
          );
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    };

    return(
=======

class Contact2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
>>>>>>> c0aae22 (committing)
        <div className="contact">
            <div className="left">
            <img className="pic" src="https://cdn.dribbble.com/users/2725108/screenshots/9896278/media/530146ce12252698ba2d11de02d48151.png" alt="" />
            </div>
    
            <div className="right">
            <h2>Contact</h2>
<<<<<<< HEAD
        
            <form onSubmit={handleOnSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="name"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
            <button type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
          </form>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            </div>
        </div>
      );
}
=======
              <form id="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                <input type="email" placeholder="Email Address" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                <textarea placeholder = "Message" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                 <button type="submit">Send</button>
            </form>
            </div>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(e) {
        e.preventDefault();
      
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {

        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if(response.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
      else {
        alert("Message failed to send. All input fields must be filled out.")
      }
        
        this.setState({
          name: '',
          email: '',
          message: '',
        });
    }
  }
  
  export default Contact2;
>>>>>>> c0aae22 (committing)
