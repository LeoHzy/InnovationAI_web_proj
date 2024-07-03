import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Our Team',
    text: 'Innovation AI team is made of machine learning engineers, software engineers, data scientists, UI/UX designers, quantitative managers and PhD scientists affiliated with the Lawrence Livermore National Lab, MIT, Stanford University, University of Pennsylvania, UCLA and other world-wide distinguished institutions. In addition, our core team has industry experience in senior roles at world’s tech firms and quantitative trading firms such as Google, Microsoft, Nvidia, IBM, JP Morgan Chase, Morgan Stanley, Citadel.',
  },
  {
    title: 'Our Credential',
    text: 'Innovation AI is based in the Silicon Valley and partnered with established conferences including Grace Hopper, IEEE and Open Source Foundations including Linux Foundation, Confidential Computing Consortium, etc.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Connect with Our Elite Team and Explore the Pinnacle of Innovation. Join Us in Shaping the Future.</h1>
      <p>Contact us via email or chat with our AI assistant !</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;