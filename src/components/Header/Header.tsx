import { FC } from 'react';
import { Button } from '../Buttons/Button';
import { LinkInterface } from './types';
import './Header.scss';
import Link from 'next/link';

const links: LinkInterface[] = [
	{ name: 'Proyectos', href: '/proyects' },
	{ name: 'Contacto', href: '/contact' },
];

const Header: FC = () => {
	return (
		<div id='header'>
			<div id='header-buttons'>
				{links.map((link) => (
					<Button key={link.name} content={link.name} children={undefined} buttonPlace={'button-header'} hRef={link.href} />
				))}
			</div>
		</div>
	);
};

export default Header;
