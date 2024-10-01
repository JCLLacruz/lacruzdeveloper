import { FC } from 'react';
import { Button } from '../Buttons/Button/Button';
import { LinkInterface } from './types';
import './Header.scss';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import { ToggleButton } from '../Buttons/ToggleButton/ToggleButton';

const links: LinkInterface[] = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Proyectos', href: '/proyects' },
	{ name: 'Contacto', href: '/contact' },
];

const Header: FC = () => {
	return (
		<div id='header'>
			<div id='header-logo-container'>
				<Link id='header-logo' href={'/'}>
					<Logo subtitle={false} />
				</Link>
			</div>
			<div className='icons-toggle-button'>
				<ToggleButton handleToggle={'setDarkLigthTheme'} />
			</div>
			<div id='header-buttons'>
				{links.map((link) => (
					<Button key={link.name} content={link.name} children={undefined} className={'button-header'} hRef={link.href} />
				))}
			</div>
		</div>
	);
};

export default Header;
