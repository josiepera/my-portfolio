import React, { Component } from 'react';
import Footer from './Footer'

class Contact extends Component {
  render(){

    return(
      <div className="contact-page">
        <h2>Contact Me</h2>
        <div className="contact-form">
          <form>
            <label>First Name</label>
            <input type="text"id="fname"name="firstname"placeholder="Your name"/>
            <label>Last Name</label>
            <input type="text"id="lname" name="lastname" placeholder="Your last name"/>


            <label>Email</label>
            <input type="email"id="email"name="email"placeholder="Your email"/>


            <label>Subject</label>
            <textarea id="subject"name="subject"placeholder="Write something"></textarea>
            <input type="submit"value="Submit"/>
          </form>
        </div>
        <Footer/>
      </div>

    )
  }
}

export default Contact;
