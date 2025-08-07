import React from "react";
import { Header } from "@/widgets/header";
import { MainPage } from "@/pages/main";

export const RootLayout: React.FC = () => {
	return (
		<div className="root-layout">
			<Header />
			<MainPage />
		</div>
	);
};
