import "./contact.scss"
import React from 'react';
import { useState } from "react";
<<<<<<< HEAD
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

=======

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  
>>>>>>> bdc5e28 (contact form update 2)
    return(
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
            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xknylvee" onSubmit={handleSubmit} method="post">
 
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
 
  <button type="submit">Send</button>
  {message && <span>Thank you for your message!</span>}
</form>
            </div>
        </div>
      );
}
>>>>>>> bdc5e28 (contact form update 2)
