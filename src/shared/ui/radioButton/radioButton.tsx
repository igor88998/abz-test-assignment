import React, { forwardRef } from "react";
import "./radioButton.css";

export interface RadioButtonProps {
	name?: string;
	value?: string | number;
	defaultChecked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	disabled?: boolean;
	label?: React.ReactNode;
	error?: string;
	readOnly?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ label, name, value, disabled, checked, onChange, ...rest }, ref) => {
		const uniqueId = `${name}-${value}`;

		return (
			<div className="radio-button-container">
				<input
					type="radio"
					ref={ref}
					disabled={disabled}
					checked={checked}
					onChange={onChange}
					name={name}
					value={value}
					id={uniqueId}
					className="radio-button__input"
					{...rest}
				/>
				{label && (
					<label htmlFor={uniqueId} className="radio-button__text">
						{label}
					</label>
				)}
			</div>
		);
	}
);
