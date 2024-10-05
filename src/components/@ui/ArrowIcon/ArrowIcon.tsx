import { FunctionComponent } from 'react';

type ArrowIconTypes = {
	backgroundColor?: string;
	color?: string;
	size?: number;
};

const ArrowIcon: FunctionComponent<ArrowIconTypes> = ({
	backgroundColor = '#FF5900',
	color = '#fff',
	size = 24,
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='12' cy='12' r='12' fill={backgroundColor} />
			<path
				d='M7.46967 15.4698C7.17678 15.7627 7.17678 16.2375 7.46967 16.5304C7.76256 16.8233 8.23744 16.8233 8.53033 16.5304L7.46967 15.4698ZM16.75 8.00009C16.75 7.58588 16.4142 7.25009 16 7.25009H9.25C8.83579 7.25009 8.5 7.58588 8.5 8.00009C8.5 8.41431 8.83579 8.75009 9.25 8.75009H15.25V14.7501C15.25 15.1643 15.5858 15.5001 16 15.5001C16.4142 15.5001 16.75 15.1643 16.75 14.7501V8.00009ZM8.53033 16.5304L16.5303 8.53042L15.4697 7.46976L7.46967 15.4698L8.53033 16.5304Z'
				fill={color}
			/>
		</svg>
	);
};

export default ArrowIcon;
