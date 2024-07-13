import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 20px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 10px;
    opacity: ${props => (props.hide ? '0' : '1')};
    transform: translateY(${props => (props.hide ? '-100%' : '0')});
    background-color: #203a43;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SearchIcon = styled.span`
  font-size: 24px;
`;

const MobileIndicator = styled.span`
  background-color: #203a43;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  z-index: 0;
  transition: opacity 0.3s ease-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.a`
  color: #203a43;
  padding: 10px;
  display: block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #203a43;
    color: white;
  }
`;

const Menu = ({ categories }) => {
  const [showDropdown, setShowDropdown] = useState(false);
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

  const handleClick = (category) => {
    // Scroll to the category section when clicking on a dropdown item
    const categoryElement = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'));
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
      setShowDropdown(false); // Hide dropdown after clicking
    }
  };

  return (
    <MenuContainer>
      <MenuButton onClick={() => setShowDropdown(!showDropdown)} hide={isScrolled}>
        <SearchIcon role="img" aria-label="Ricerca rapida">
          🔍
        </SearchIcon>
      </MenuButton>
      <MobileIndicator style={{ opacity: isScrolled ? '1' : '0' }}>Categorie</MobileIndicator>
      <DropdownContent show={showDropdown}>
        {categories.map((category, index) => (
          <DropdownItem key={index} onClick={() => handleClick(category)} href="#">
            {category}
          </DropdownItem>
        ))}
      </DropdownContent>
    </MenuContainer>
  );
};

export default Menu;
