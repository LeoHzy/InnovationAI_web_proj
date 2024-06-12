import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
  .card {
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Lobster', cursive; /* Change to the new font */
  font-size: 5rem; /* Increase the font size */
  color: #007bff; /* Color for the title */
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  color: #333;
  font-family: 'Roboto', sans-serif; /* Custom font */
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
  font-family: 'Roboto', sans-serif; /* Custom font */
`;

function About() {
  return (
    <Container className="container">
      <Title>About Us</Title>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <CardTitle>Overview</CardTitle>
              <CardText>
                We are a company aiming to make AI technology and services accessible to organizations and users around the world. We develop Cloud services to deploy Statistical and Artificial Intelligence models. And we conduct Machine Learning models experiments and research to produce actionable recommendations, customer behavior analysis, and draw insights for business growth. Our clients comprise Corporations, Open Source Foundations, and End Users.
              </CardText>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <CardTitle>Our Team</CardTitle>
              <CardText>
                Innovation AI team is made of machine learning engineers, software engineers, data scientists, UI/UX designers, quantitative managers and PhD scientists affiliated with the Lawrence Livermore National Lab, MIT, Stanford University, University of Pennsylvania, UCLA and other world-wide distinguished institutions. In addition, our core team has industry experience in senior roles at world’s tech firms and quantitative trading firms such as Google, Microsoft, Nvidia, IBM, JP Morgan Chase, Morgan Stanley, Citadel.
              </CardText>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <CardTitle>Our Credentials</CardTitle>
              <CardText>
                Innovation AI is based in the Silicon Valley and partnered with established conferences including Grace Hopper, IEEE and Open Source Foundations including Linux Foundation, Confidential Computing Consortium, etc.
              </CardText>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;