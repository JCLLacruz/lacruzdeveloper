import { FC, ReactNode } from 'react';
import './Logo.scss';
import Image from 'next/image';
import profilImage from '../../media/images/Ilustración_sin_título.png';

interface LogoProps {
	image?: boolean;
	subtitle?: boolean;
}

const Logo: FC<LogoProps> = ({ subtitle = true, image = false }) => {
	return (
		<div id='logo'>
			{image && (
				<div id='logo-image'>
					<Image src={profilImage} alt='profile image' fill={true} />
				</div>
			)}
			<div>
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
		</div>
	);
};

export default Logo;
