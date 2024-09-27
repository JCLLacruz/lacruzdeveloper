'use client';
import React, { use, useContext, useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext/ThemeContext'; 
import './ToggleButton.scss';

interface ToggleButtonProps {
	width?: string;
	height?: string;
	activeBackgroundColor?: string;
	inactiveBackgroundColor?: string;
	borderRadius?: string;
	toggleSize?: string;
	toggleColor?: string;
	handleToggle: 'setDarkLigthTheme';
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
	width = '50px',
	height = '25px',
	activeBackgroundColor = '#4cd964',
	inactiveBackgroundColor = '#e5e5ea',
	borderRadius = '25px',
	toggleSize = '22px',
	toggleColor = 'white',
	handleToggle,
}) => {
	const { theme, setTheme } = useTheme();
	const isActive = theme === 'dark';

	const setDarkLigthTheme = () => {
		setTheme(isActive ? 'light' : 'dark');
	};
	let toMake;
	switch (true) {
		case handleToggle === 'setDarkLigthTheme':
			toMake = setDarkLigthTheme;

			break;

		default:
			break;
	}
	return (
		<div className='toggle-button'
			onClick={toMake}
			style={{
				width,
				height,
				backgroundColor: isActive ? activeBackgroundColor : inactiveBackgroundColor,
				borderRadius,
				display: 'flex',
				alignItems: 'center',
				justifyContent: isActive ? 'flex-end' : 'flex-start',
				padding: '2px',
				cursor: 'pointer',
				transition: 'background-color 0.3s ease, justify-content 0.3s ease',
			}}
		>
			<div
				style={{
					width: toggleSize,
					height: toggleSize,
					backgroundColor: toggleColor,
					borderRadius: '50%',
					transition: 'transform 0.3s ease',
					boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
				}}
			/>
            
		</div>
	);
};
