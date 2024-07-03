import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="gpt3__about section__margin" id="about">
    <div className="gpt3__about-feature">
      <Feature title="About Us" text="We are a company aiming to make AI technology and services accessible to organizations and users around the world. We develop Cloud services to deploy Statistical and Artificial Intelligence models. And we conduct Machine Learning models experiments and research to produce actionable recommendations, customer behavior analysis, and draw insights for business growth.  Our clients comprise Corporations, Open Source Foundations, and End Users." />
    </div>
    <div className="gpt3__about-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore our services</p>
    </div>
    <div className="gpt3__about-container">
      <Feature title="Consulting" text="We offer expert consulting services to help businesses implement AI solutions effectively." />
      <Feature title="Development" text="Our team specializes in developing customized AI applications tailored to your needs." />
      <Feature title="Support" text="We provide ongoing support and maintenance to ensure your AI systems run smoothly." />
    </div>
  </div>
);

export default About;