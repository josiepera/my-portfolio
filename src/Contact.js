import React, { Component } from 'react';
import Footer from './Footer'

class Contact extends Component {
  state= {
    name: '',
    email: '',
    message: '',
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
}

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
            <textarea id="subject"name="subject"placeholder="Write something"
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
            ></textarea>

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

          </form>
        </div>

      </div>
      <Footer/>
    </>
    )
  }
}

export default Contact;
