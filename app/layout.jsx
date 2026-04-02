import "./globals.css";
import { Navbar } from "../src/components/common/Navbar";

export const metadata = {
	title: "ZiyadBooks",
	description: "Landing page"
};

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

