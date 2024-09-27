import { FC, ReactNode } from 'react';
import './Logo.scss';

interface LogoProps {
	subtitle?: boolean;
}

const Logo: FC<LogoProps> = ({ subtitle = true }) => {
	return (
		<div id='logo'>
			<div id='logo-title'>
				<h1>
					Lacruz
					<span id='logo-sup'>Developer</span>
				</h1>
			</div>
			{subtitle && (
				<div id='logo-subtitle'>
					<h2>Devious, meticulous, not obvious.</h2>
				</div>
			)}
		</div>
	);
};

export default Logo;
