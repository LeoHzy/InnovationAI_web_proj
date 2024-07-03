import React, { useState } from 'react';
import axios from 'axios';
import locationIcon from '../../assets/location.png';
import mailIcon from '../../assets/mail.png';
import callIcon from '../../assets/call.png';
// import facebookIcon from '../../assets/1.png';
// import twitterIcon from '../../assets/2.png';
// import instagramIcon from '../../assets/3.png';
import linkedinIcon from '../../assets/5.png';
import './contact.css'; // Import custom CSS for additional styling

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
    <section className="contact-section">
      <div className="container">
        <div className="contactinfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><img src={locationIcon} alt="Location" /></span>
                <span>18 S 2nd St, Office NO.115<br />San Jose, California 95113, US</span>
              </li>
              <li>
                <span><img src={mailIcon} alt="Email" /></span>
                <span>info@innovation-ai.co</span>
              </li>
              <li>
                <span><img src={callIcon} alt="Call" /></span>
                <span>+1 012 3456 789</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            {/* <li><a href="#"><img src={facebookIcon} alt="Facebook" /></a></li>
            <li><a href="#"><img src={twitterIcon} alt="Twitter" /></a></li>
            <li><a href="#"><img src={instagramIcon} alt="Instagram" /></a></li> */}
            <li><a href="https://www.linkedin.com/company/innovation-ai-corp/about/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="phone" required value={formData.phone} onChange={handleChange} />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea name="message" required value={formData.message} onChange={handleChange}></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;