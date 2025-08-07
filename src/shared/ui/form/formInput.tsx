import type { FC } from "react";
import { Controller } from "react-hook-form";
import type { Control, UseControllerProps } from "react-hook-form";
import type { InputProps } from "@/shared/ui/input";
import { Input } from "@/shared/ui/input";

type FormInputBlockProps = InputProps &
	Omit<UseControllerProps, "render" | "control" | "error"> & {
		control: Control<any>;
	};

const FormInput: FC<FormInputBlockProps> = ({
	control,
	rules,
	name,
	error,
	defaultValue,
	onChange,
	...rest
}) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error: fieldError } }) => (
				<Input
					{...field}
					{...rest}
					value={field.value}
					onChange={(e) => {
						if (onChange) {
							onChange(e);
						}
						field.onChange(e);
					}}
					error={fieldError?.message ? fieldError.message : error}
				/>
			)}
		/>
	);
};

export default FormInput;
