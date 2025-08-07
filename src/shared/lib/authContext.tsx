import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
	userId: number | null;
	setUserId: (id: number | null) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState<number | null>(null);

	const logout = () => {
		setIsLoggedIn(false);
		setUserId(null);
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, setIsLoggedIn, userId, setUserId, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };
