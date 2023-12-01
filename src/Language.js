import React, { useState } from 'react';
import './Language.css';

const Language = () => {
  const languages = [
    { name: 'Hindi', flag: 'india.png' }, { name: 'English', flag: 'uk.png' }, { name: 'French', flag: 'france.png' },
    { name: 'Spanish', flag: 'spain.png' }, { name: 'Japanese', flag: 'japan.png' }, { name: 'German', flag: 'germany.png' },
    { name: 'Italian', flag: 'italy.png' }, { name: 'Korean', flag: 'korea.png' }, { name: 'Arabic', flag: 'sa.png' },
    { name: 'Chinese', flag: 'china.png' }, { name: 'Russian', flag: 'russia.png' }, { name: 'Turkish', flag: 'turkey.png' },
    { name: 'Portuguese', flag: 'portugal.png' }, { name: 'Dutch', flag: 'nether.png' }, { name: 'Polish', flag: 'poland.png' }
  ];

  const itemsToShow = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextLanguage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % languages.length);
  };

  const prevLanguage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + languages.length) % languages.length);
  };

  return (
    <div className="language">
      <h2>Get started with</h2>
      <div className="language-container">
        <button onClick={prevLanguage} className="arrow-button">❮</button>
        <div className="language-list">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`language-item ${index >= currentIndex && index < currentIndex + itemsToShow ? 'selected' : ''}`}
              style={{ transform: `translateX(${50 * (index - currentIndex)}%)` }}
            >
              <img src={language.flag} alt={language.name} />
              <p>{language.name}</p>
            </div>
          ))}
        </div>
        <button onClick={nextLanguage} className="arrow-button">❯</button>
      </div>
    </div>
  );
};

export default Language;
