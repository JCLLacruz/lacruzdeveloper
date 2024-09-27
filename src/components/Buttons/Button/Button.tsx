import clsx from 'clsx';
import Link from 'next/link';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	bgColor?: string;
	hover?: string;
	focus?: string;
	active?: string;
	content: string;
	hRef?: string;
}

export function Button({ children, className, content, hRef, ...rest }: ButtonProps) {
	if (hRef === undefined) {
		hRef = '#';
	}

	return (
		<Link href={hRef}>
			<button {...rest} className={`button ${className}`}>
				{children}
				{content}
			</button>
		</Link>
	);
}
