import { useContext } from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		console.error("useAuth must be used within an AuthProvider");
		return {
			isLoggedIn: false,
			setIsLoggedIn: () => {},
			userId: null,
			setUserId: () => {},
			logout: () => {},
		};
	}
	return context;
};
