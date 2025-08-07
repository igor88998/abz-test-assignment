import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFont from "@/shared/fonts/useFonts";

export const UIProvider = ({ children }: { children: ReactNode }) => {
	useFont();

	return (
		<>
			{children}
			<ToastContainer position="top-right" autoClose={3000} />
		</>
	);
};
