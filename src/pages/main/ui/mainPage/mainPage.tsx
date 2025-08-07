import { HeroSection } from "@/widgets/heroSection";
import "./mainPage.css";
import { UsersSection } from "@/widgets/usersSection";
import { SignUpSection } from "@/widgets/signUpSection";

export const MainPage: React.FC = () => {
	return (
		<div className="main-page">
			<HeroSection />
			<UsersSection />
			<SignUpSection />
		</div>
	);
};
