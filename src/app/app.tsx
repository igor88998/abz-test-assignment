import "@/app/styles/globals.css";
import React from "react";
import { RootLayout } from "./layouts/rootLayout";
import { UIProvider, QueryProvider } from "./providers";
import { AuthProvider } from "@/shared/lib";

const App: React.FC = () => {
	return (
		<QueryProvider>
			<UIProvider>
				<AuthProvider>
					<RootLayout />
				</AuthProvider>
			</UIProvider>
		</QueryProvider>
	);
};

export default App;
