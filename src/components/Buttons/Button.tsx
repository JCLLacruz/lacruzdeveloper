import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	bgColor?: string;
	hover?: string;
	focus?: string;
	active?: string;
    content: string;
	hRef?: string;
    buttonPlace: 'button-header' | 'button-interface';
}

export function Button({
	children,
	className,
    content,
    buttonPlace,
	hRef,
	...rest
}: ButtonProps) {
	if (hRef === undefined) {
		hRef = '#';
	}
	
	return (
		<Link href={hRef}>
		<button
			{...rest}
			className={clsx(
				className,
                {'button-header': buttonPlace = 'button-header'},
                {'button-interface': buttonPlace = 'button-interface'}
			)}
		>
			{children}
            {content}
		</button>
		</Link>
	);
}
