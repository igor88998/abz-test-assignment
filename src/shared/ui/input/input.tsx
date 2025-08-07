import React, { forwardRef, type InputHTMLAttributes } from "react";
import "./input.css";
import clsx from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string | React.ReactNode;
	labelBottom?: string | React.ReactNode;
	error?: string;
	errorRelative?: boolean;
	register?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			error,
			errorRelative,
			disabled,
			name,
			value,
			labelBottom,
			children,
			className,
			register,
			...rest
		},
		ref
	) => {
		return (
			<div
				className={clsx("input-wrapper", {
					error: !!error,
					errorRelative: !!errorRelative,
					disabled: !!disabled,
					labelBottom: !!labelBottom,
				})}
			>
				{label && (
					<label className="input-label" htmlFor={name}>
						{label}
					</label>
				)}

				<div
					className={clsx(
						"input-container",
						error && "input-error",
						disabled && "input-disabled",
						className
					)}
				>
					<input
						id={name}
						name={name}
						ref={ref}
						disabled={disabled}
						value={value}
						autoComplete={disabled ? "off" : "on"}
						data-lpignore={disabled ? "off" : "on"}
						children={children}
						{...register}
						{...rest}
					/>
				</div>

				{error && <span className="input-error-text">{error}</span>}
				{!error && labelBottom && (
					<p className="input-label-bottom">{labelBottom}</p>
				)}
			</div>
		);
	}
);
