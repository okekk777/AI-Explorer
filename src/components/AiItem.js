import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  width: 90%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 500px;
    padding: 20px;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
  transition: transform 0.3s;

  ${ItemContainer}:hover & {
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  color: #e0e1dd;
  margin: 5px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: #a9b4c2;
  text-align: center;
  margin: 5px 0 10px;
  font-size: 0.9rem;
`;

const Link = styled.a`
  color: #e0e1dd;
  text-decoration: none;
  border: 1px solid #1b263b;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 10px;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;
  font-size: 0.9rem;

  &:hover {
    background-color: #1b263b;
    color: #ffffff;
  }
`;

const AiItem = ({ name, description, logo, link }) => {
  return (
    <ItemContainer>
      <Logo src={logo} alt={`${name} logo`} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Link href={link} target="_blank" rel="noopener noreferrer">Visita</Link>
    </ItemContainer>
  );
};

export default AiItem;
