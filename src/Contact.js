import React, { Component } from 'react';
import Footer from './Footer'

import axios from 'axios';

// <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

class Contact extends Component {
  state= {
    name: '',
    email: '',
    message: '',
    mailSent: false,
    error: null
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
}


handleFormSubmit = e => {
  const API_PATH = 'http://localhost:3000/josie_portfolio/api/contact/index.php';
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};

  render(){

    return(
    <>
      <div className="contact-page">
        <h2>Contact Me</h2>
        <div className="line"></div>
        <div className="contact-form">
          <form>
            <label>Name</label>
            <input type="text"id="name"name="name"placeholder="Your Name"
            value= {this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            />



            <label>Email</label>
            <input type="email"id="email"name="email"placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            />


            <label>Subject</label>
            <textarea id="subject"name="subject"placeholder="Your Message"
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
            ></textarea>

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

            <div>
              {this.state.mailSent &&
                <div>Thank you for contcting us.</div>
              }
            </div>
          </form>
        </div>

      </div>
      <Footer/>
    </>
    )
  }
}

export default Contact;
