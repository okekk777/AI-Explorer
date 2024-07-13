import React from 'react';
import './App.css';
import AiList from './components/AiList';
import Menu from './components/Menu';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #0d1b2a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  background-color: #1b263b;
  padding: 20px;
  color: white;
  width: 100%;
  text-align: center;
`;

const categories = [
  "Generale",
  "Sviluppare Immagini",
  "Analisi Dati",
  "Editing",
  "Sviluppo Software",
  "Ricerca"
];

function App() {
  return (
    <AppContainer>
      <Header>
        <h1>AI Explorer</h1> {/* Modifica qui il titolo */}
      </Header>
      <Menu categories={categories} />
      <AiList />
    </AppContainer>
  );
}

export default App;
