import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Import custom CSS for additional styling

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/send-email', formData);

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      alert('Your message has been sent. We will get back to you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      });
    } catch (error) {
      console.error('There was an error sending the email:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

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
                <a href="https://www.linkedin.com/company/innovation-ai-corp/about/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form p-4" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Select Subject</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="subject"
                    id="generalInquiry"
                    value="general"
                    checked={formData.subject === 'general'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="generalInquiry"> General Inquiry </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="subject"
                    id="feedback"
                    value="feedback"
                    checked={formData.subject === 'feedback'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="feedback"> Feedback </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="subject"
                    id="support"
                    value="support"
                    checked={formData.subject === 'support'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="support"> Support </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                ></textarea>
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