'use client';
import React, { useEffect, useState } from 'react';
import './BackgroundLorem.scss';

const getImportantWords = (paragraphs: number): string => {
  const importantWords = `
HTML, CSS, JavaScript, API, frontend, backend, responsive, framework, React, Vue, Angular, Node.js, Express, MongoDB, PostgreSQL, Git, UI, UX, server, database, cloud, deployment, authentication, middleware, asynchronous, JSON, HTML5, CSS3, webpack, REST, GraphQL, SEO, performance, optimization, scripting, markup, stylesheets, components, services, libraries
  `.repeat(paragraphs);

  return importantWords.trim();
};

const getRandomWords = (text: string, count: number): string[] => {
  const words = text.split(/\s+/); // Divide el texto en palabras
  const randomWords = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }
  return randomWords;
};

const BackgroundLorem: React.FC = () => {
  const [backgroundWords, setBackgroundWords] = useState<string[]>([]);

  useEffect(() => {
    const importantText = getImportantWords(3);
    const words = getRandomWords(importantText, 30);
    setBackgroundWords(words);
  }, []);

  return (
    <div className='BackgroundLorem-container'>
      {backgroundWords.map((word, index) => {
        const top = Math.random() * 90; // Porcentaje para top
        const left = Math.random() * 90; // Porcentaje para left

        return (
          <span key={index} className='word' style={{
            top: `${top}%`,
            left: `${left}%`,
          }}>
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default BackgroundLorem;
