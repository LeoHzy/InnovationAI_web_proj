import React from 'react';
import './Contact.css'; // Import custom CSS for additional styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center">Any question or remarks? Just write us a message!</p>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info light-blue-bg p-4">
              <h3>Contact Information</h3>
              <ul className="list-unstyled">
                <li><i className="fas fa-phone"></i> +1 012 3456 789</li>
                <li><i className="fas fa-envelope"></i> demo@gmail.com</li>
                <li><i className="fas fa-map-marker-alt"></i> 18 S 2nd St, Office NO.115, San Jose, California 95113, US</li>
              </ul>
              <div className="social-icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form p-4">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label>Select Subject</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="subject" id="generalInquiry" value="general" checked />
                  <label className="form-check-label" htmlFor="generalInquiry"> General Inquiry </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="subject" id="feedback" value="feedback" />
                  <label className="form-check-label" htmlFor="feedback"> Feedback </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="subject" id="support" value="support" />
                  <label className="form-check-label" htmlFor="support"> Support </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;