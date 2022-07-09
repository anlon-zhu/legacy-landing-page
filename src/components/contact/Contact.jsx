import "./contact.scss"
import React from 'react';
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  
    return(
        <div className="contact">
            <div className="left">
            <img className="pic" src="https://cdn.dribbble.com/users/2725108/screenshots/9896278/media/530146ce12252698ba2d11de02d48151.png" alt="" />
            </div>
    
            <div className="right">
            <h2>Contact</h2>
        
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