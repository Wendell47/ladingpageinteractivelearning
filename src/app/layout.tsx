import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "EcoLife - Interactive Learning",
	description:
		"Site para Demonstrar e ensinar a criação de uma pagina lading page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="br">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
