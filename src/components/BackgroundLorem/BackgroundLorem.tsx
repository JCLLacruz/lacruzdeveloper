'use client';
import React, { useEffect, useState, useRef } from 'react';
import './BackgroundLorem.scss';

const getImportantWords = (paragraphs: number): string => {
	const importantWords = `
HTML CSS JavaScript API frontend backend responsive framework React, Vue Angular Node.js Express MongoDB PostgreSQL Git UI UX server database cloud deployment authentication middleware asynchronous JSON HTML5 CSS3 webpack REST GraphQL SEO performance optimization scripting markup stylesheets components services libraries
  `.repeat(paragraphs);

	return importantWords.trim();
};

const getRandomWords = (text: string, count: number): string[] => {
	const words = text.split(/\s+/);
	const randomWords = [];
	for (let i = 0; i < count; i++) {
		const randomIndex = Math.floor(Math.random() * words.length);
		randomWords.push(words[randomIndex]);
	}
	return randomWords;
};

const BackgroundLorem: React.FC = () => {
	const [backgroundWords, setBackgroundWords] = useState<string[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const importantText = getImportantWords(3);
		const words = getRandomWords(importantText, 20);
		setBackgroundWords(words);
	}, []);

	useEffect(() => {
		const updatePositions = () => {
			if (containerRef.current) {
				const container = containerRef.current;
				const containerHeight = window.innerHeight; // Usamos la altura del viewport
				const containerWidth = container.clientWidth;

				const spans = container.querySelectorAll('span.word');

				spans.forEach((span) => {
					const wordWidth = span.clientWidth;
					const wordHeight = span.clientHeight;
					const maxLeft = containerWidth - wordWidth;
					const maxTop = containerHeight - wordHeight;

					const left = Math.random() * maxLeft;
					const top = Math.random() * maxTop;

					span.setAttribute('style', `top: ${top}px; left: ${left}px;`);
				});
			}
		};

		// Llamamos la función una vez para ajustar las posiciones
		updatePositions();

		// Recalcular cuando la ventana cambie de tamaño
    window.addEventListener('click', updatePositions);
		window.addEventListener('resize', updatePositions);

		return () => {
			window.removeEventListener('resize', updatePositions);
		};
	}, [backgroundWords]);

	return (
		<div ref={containerRef} className='BackgroundLorem-container'>
			{backgroundWords.map((word, index) => (
				<span key={index} className='word'>
					{word}
				</span>
			))}
		</div>
	);
};

export default BackgroundLorem;
