import classes from './MainButton.module.sass';

function MainButton({
	disabled = false,
	variant = 'main',
	children,
}: {
	disabled?: boolean;
	variant?: 'main' | 'black';
	children: React.ReactNode;
}) {
	return (
		<button
			disabled={disabled}
			className={`${classes.MainButton} ${
				variant === 'black' ? classes.black : ''
			}`}
		>
			{children}
		</button>
	);
}

export default MainButton;
