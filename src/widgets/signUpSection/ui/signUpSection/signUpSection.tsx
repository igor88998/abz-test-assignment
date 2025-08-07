import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Button, ButtonType, ButtonSize } from "@/shared/ui/button";
import type { SignUpFormData } from "@/shared/types";
import { signUpFormSchema } from "@/shared/types";
import "./signUpSection.css";
import { FormInput, FormRadioButton, FormFileUpload } from "@/shared/ui/form";
import { useSignUp, usePositions } from "@/shared/api";
import { useAuth } from "@/shared/lib";
import successImage from "@/shared/assets/svg/success-image.svg";
import loader from "@/shared/assets/svg/loader.svg";

export const SignUpSection: React.FC = () => {
	const { isLoggedIn, setIsLoggedIn, setUserId } = useAuth();
	const { data: positionsData, isLoading: positionsLoading } = usePositions();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		setValue,
	} = useForm<SignUpFormData>({
		resolver: zodResolver(signUpFormSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			position_id: 1,
		},
	});

	React.useEffect(() => {
		if (positionsData?.positions?.[0]) {
			setValue("position_id", positionsData.positions[0].id);
		}
	}, [positionsData, setValue]);

	const handleLogout = () => {
		setIsLoggedIn(false);
		setUserId(null);
		reset();
		toast.info("Logged out successfully!");
	};

	const signUpMutation = useSignUp({
		onSuccess: (data) => {
			console.log("User registered successfully:", data);
			setIsLoggedIn(true);
			if (data.user_id) {
				setUserId(data.user_id);
			}
			reset();
			toast.success("Registration successful! Welcome!");
		},
		onError: (error) => {
			console.error("Registration failed:", error);
			toast.error("Registration failed! Please try again.");
		},
	});

	const onSubmit = async (data: SignUpFormData) => {
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("phone", data.phone);
		formData.append("position_id", data.position_id.toString());
		if (data.photo) {
			formData.append("photo", data.photo);
		}

		signUpMutation.mutate(formData);
	};

	return (
		<section id="signup-form" className="signup-section">
			{!isLoggedIn ? (
				<>
					<h2 className="signup-section__title">Working with POST request</h2>
					<form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="signup-form__fields">
							<FormInput
								control={control}
								name="name"
								type="text"
								placeholder="Your name"
								error={errors.name?.message}
							/>

							<FormInput
								control={control}
								name="email"
								type="email"
								placeholder="Email"
								error={errors.email?.message}
							/>

							<FormInput
								control={control}
								name="phone"
								type="tel"
								placeholder="Phone"
								labelBottom="+38 (XXX) XXX-XX-XX"
								error={errors.phone?.message}
							/>

							<div className="signup-form__field">
								<label className="signup-form__label">
									Select your position
								</label>
								<div className="signup-form__radio-group">
									{positionsLoading ? (
										<div className="signup-form__loader">
											<img src={loader} alt="Loading positions..." />
										</div>
									) : (
										positionsData?.positions?.map((position) => (
											<FormRadioButton
												key={position.id}
												control={control}
												name="position_id"
												label={position.name}
												value={position.id}
												error={errors.position_id?.message}
											/>
										))
									)}
								</div>
							</div>

							<FormFileUpload
								control={control}
								name="photo"
								accept="image/jpeg,image/jpg"
								error={errors.photo?.message}
								onFileSelect={() => {}}
							/>
						</div>

						<div className="signup-form__actions">
							<Button
								btnType={ButtonType.PRIMARY}
								size={ButtonSize.MEDIUM}
								type="submit"
								loading={signUpMutation.isPending}
								disabled={!isValid || signUpMutation.isPending}
							>
								Sign up
							</Button>
						</div>
					</form>
				</>
			) : (
				<div className="signup-success">
					<div className="signup-success__content">
						<h1 className="signup-success__title">
							User successfully registered
						</h1>
						<div className="signup-success__image">
							<img
								src={successImage}
								alt="User successfully registered"
								className="signup-success__illustration"
							/>
						</div>
					</div>
					<div className="signup-success__actions">
						<Button
							btnType={ButtonType.PRIMARY}
							size={ButtonSize.MEDIUM}
							onClick={handleLogout}
						>
							Logout
						</Button>
					</div>
				</div>
			)}
		</section>
	);
};
