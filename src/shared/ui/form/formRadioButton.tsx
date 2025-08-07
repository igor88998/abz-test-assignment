import type { FC } from "react";
import { Controller } from "react-hook-form";
import type { Control, UseControllerProps } from "react-hook-form";
import type { RadioButtonProps } from "@/shared/ui/radioButton/radioButton";
import { RadioButton } from "@/shared/ui/radioButton/radioButton";

interface FormRadioButtonProps
	extends Omit<RadioButtonProps, "defaultValue">,
		Omit<UseControllerProps, "render" | "control" | "error" | "defaultValue"> {
	control: Control<any>;
	name: string;
	value: number;
}

const FormRadioButton: FC<FormRadioButtonProps> = ({
	control,
	rules,
	name,
	value,
	onChange,
	...rest
}) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value: fieldValue, onChange: fieldOnChange, ...field },
			}) => (
				<RadioButton
					{...field}
					{...rest}
					value={value}
					checked={fieldValue === value}
					onChange={(e) => {
						fieldOnChange(value);
						if (onChange) {
							onChange(e);
						}
					}}
				/>
			)}
		/>
	);
};

export default FormRadioButton;
