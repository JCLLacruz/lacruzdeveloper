import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header/Header';
import { ThemeProvider } from '@/contexts/ThemeContext/ThemeContext';
import BackgroundLorem from '@/components/BackgroundLorem/BackgroundLorem';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Juan Carlos Lacruz Developer',
	description: 'Portfolio de desarrollador web junior con dominio de React y en aprendizaje de Next.js. Muestra proyectos recientes, habilidades en tecnologías web, y soluciones creativas para construir aplicaciones modernas. Explora mi experiencia en desarrollo frontend y backend, con enfoque en diseño limpio y funcionalidad eficiente.',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang='en'>
		<body className={`${inter.className} antialiased`}>
			<ThemeProvider>
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					{children}
				</Suspense>
				<BackgroundLorem/>
			</ThemeProvider>
		</body>
	</html>
);

export default RootLayout;

