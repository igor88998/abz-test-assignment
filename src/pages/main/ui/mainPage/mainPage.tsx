import { HeroSection } from "@/widgets/heroSection";
import { SignUpSection } from "@/widgets/signUpSection";
import { UsersSection } from "@/widgets/usersSection";
import "./mainPage.css";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <HeroSection />
      <UsersSection />
      <SignUpSection />
    </div>
  );
};
