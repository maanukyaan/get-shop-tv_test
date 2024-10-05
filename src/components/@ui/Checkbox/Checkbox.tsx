'use client';

import { FunctionComponent, useState } from 'react';
import classes from './Checkbox.module.sass';

interface CheckboxProps {
	label?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
	label,
	checked = false,
	onChange,
	disabled,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		if (onChange) {
			onChange(!isChecked);
		}
	};

	return (
		<label className={classes.Checkbox}>
			<input
				type='checkbox'
				checked={isChecked}
				onChange={handleCheckboxChange}
				disabled={disabled}
			/>
			<span className={classes.checkmark}></span>
			<span className={classes.labelText}>
				Я ознакомлен(а) с{' '}
				<a href='/privacy_policy'>политикой конфиденциальности</a> и
				согласен(на) на{' '}
				<a href='/data_processing_agreement'>обработку персональных данных</a>.
			</span>
		</label>
	);
};

export default Checkbox;
