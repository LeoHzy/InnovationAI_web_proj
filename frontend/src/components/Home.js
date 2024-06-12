import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Golden_Gate_Bridge_as_seen_from_Battery_East.png';

const HomeContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Black overlay with 50% opacity */
    z-index: -1;
  }
`;

const CompanyName = styled.h1`
  font-size: 4rem;
  font-family: 'Pacifico', cursive;
  margin-bottom: 1rem;
  color: #ADD8E6;
`;

const Slogan = styled.p`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  max-width: 1200px;
  color: white;
`;

function Home() {
  return (
    <HomeContainer>
      <CompanyName>Innovation AI</CompanyName>
      <Slogan>Make AI technology and services accessible to organizations and users around the world</Slogan>
    </HomeContainer>
  );
}

export default Home;