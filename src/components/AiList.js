import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AiItem from './AiItem';

import chatgptLogo from '../images/chatgpt.jpg';
import dalleLogo from '../images/dalle.png';
import midjourneyLogo from '../images/midjourney.png';
import geminiLogo from '../images/gemini.png';
import heygenLogo from '../images/heygen.png';
import udioLogo from '../images/udio.png';
import gptEngineerLogo from '../images/gpt-engineer.png';
import metaAiLogo from '../images/meta-ai.jpg';
import claudeAiLogo from '../images/claude-ai.png';
import leonardoAiLogo from '../images/leonardo-ai.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
  }
`;

const aiData = [
  {
    name: "ChatGPT",
    description: "Un modello di linguaggio AI sviluppato da OpenAI.",
    logo: chatgptLogo,
    link: "https://chatgpt.com/",
    category: "Generale"
  },
  {
    name: "DALL-E",
    description: "Un modello di generazione di immagini sviluppato da OpenAI.",
    logo: dalleLogo,
    link: "https://www.bing.com/images/create?q=rana+che+salta%2C+futuristica%2Ccute%2Cfantasy%2Cdi+colore+verde+e+blu+squamata&rt=3&FORM=GENCRE&id=1-668e7635e213458ba96adf71cc9281db",
    category: "Sviluppare Immagini"
  },
  {
    name: "MidJourney",
    description: "AI che assiste nel percorso di sviluppo personale e professionale.",
    logo: midjourneyLogo,
    link: "https://discord.com/channels/662267976984297473/999550150705954856",
    category: "Sviluppare Immagini"
  },
  {
    name: "Gemini",
    description: "Un AI che supporta l'analisi e l'interpretazione dei dati.",
    logo: geminiLogo,
    link: "https://gemini.google.com/app/39fb0661748c55ff?hl=it",
    category: "Analisi Dati"
  },
  {
    name: "Heygen",
    description: "Un AI per la creazione e l'analisi di contenuti multimediali.",
    logo: heygenLogo,
    link: "https://app.heygen.com/home",
    category: "Editing"
  },
  {
    name: "Udio",
    description: "Un AI per la produzione di contenuti audio.",
    logo: udioLogo,
    link: "https://www.udio.com/",
    category: "Editing"
  },
  {
    name: "GPT-Engineer",
    description: "Un AI focalizzato sull'ingegneria e lo sviluppo software.",
    logo: gptEngineerLogo,
    link: "https://chatgpt.com/g/g-WwXQO67cv-gpt-engineer",
    category: "Sviluppo Software"
  },
  {
    name: "Meta AI",
    description: "Un AI per la ricerca e lo sviluppo di intelligenza artificiale avanzata.",
    logo: metaAiLogo,
    link: "https://www.meta.ai",
    category: "Ricerca"
  },
  {
    name: "Claude AI",
    description: "Un AI per l'analisi e la visualizzazione dei dati.",
    logo: claudeAiLogo,
    link: "https://claude.ai/chat/08dd0203-5f3d-4585-8ed3-f1f44d4f5d77",
    category: "Analisi Dati"
  },
  {
    name: "Leonardo AI",
    description: "Un AI per la creazione e l'editing di contenuti visuali.",
    logo: leonardoAiLogo,
    link: "https://app.leonardo.ai/",
    category: "Editing"
  }
];

const AiListContainer = styled.div`
  padding: 20px;
`;

const CategoryContainer = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  color: #e0e1dd;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const RainbowText = styled.span`
  background: linear-gradient(135deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #ff2400);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const AiList = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const uniqueCategories = [...new Set(aiData.map(ai => ai.category))];

  return (
    <>
      <GlobalStyle />
      <AiListContainer>
        {uniqueCategories.map((category, index) => (
          <CategoryContainer key={index} id={category.toLowerCase().replace(/\s+/g, '-')}>
            <CategoryTitle>
              {index === 0 && (
                <RainbowText>Lista delle AI</RainbowText>
              )}
              {index === 0 && <br />}
              {category}
            </CategoryTitle>
            <ItemsContainer>
              {aiData
                .filter(ai => ai.category === category)
                .map((filteredAi, index) => (
                  <AiItem
                    key={index}
                    name={filteredAi.name}
                    description={filteredAi.description}
                    logo={filteredAi.logo}
                    link={filteredAi.link}
                    isScrolled={isScrolled}
                  />
                ))}
            </ItemsContainer>
          </CategoryContainer>
        ))}
      </AiListContainer>
    </>
  );
};

export default AiList;
