import type { FC } from "react";
import { Controller } from "react-hook-form";
import type { Control, UseControllerProps } from "react-hook-form";
import type { FileUploadProps } from "@/shared/ui/fileUpload/fileUpload";
import { FileUpload } from "@/shared/ui/fileUpload/fileUpload";

type FormFileUploadBlockProps = FileUploadProps &
	Omit<UseControllerProps, "render" | "control" | "error"> & {
		control: Control<any>;
	};

const FormFileUpload: FC<FormFileUploadBlockProps> = ({
	control,
	rules,
	name,
	error,
	defaultValue,
	onFileSelect,
	...rest
}) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field, fieldState: { error: fieldError } }) => (
				<FileUpload
					{...field}
					{...rest}
					onFileSelect={(file) => {
						if (onFileSelect) {
							onFileSelect(file);
						}
						field.onChange(file);
					}}
					selectedFileName={(field.value as File)?.name}
					error={fieldError?.message ? fieldError.message : error}
				/>
			)}
		/>
	);
};

export default FormFileUpload;
