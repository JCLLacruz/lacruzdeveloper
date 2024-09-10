'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from '@/app/ui/home.module.scss';

const ResponsiveComponent = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <div className={clsx({ [styles.mobile]: isMobile }, { [styles.desktop]: !isMobile })}>{children}</div>;
};

export default ResponsiveComponent;
