import cn from "@/lib/cn";
import { NextAuthProvider } from "@/providers/next-auth-provider";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | Swiftforms",
		default: "Swiftforms",
	},
	description:
		"Create and customize forms on the go. Tailor forms to your specific needs and collect valuable data effortlessly",
};

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "flex h-screen w-screen items-center justify-center")}>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}

export default RootLayout;
