"use client";

import { Inter } from "next/font/google";

import cn from "@/lib/cn";

import "./globals.css";
import { NextAuthProvider } from "./providers/next-auth-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Swiftforms",
	description:
		"Create and customize forms on the go. Tailor forms to your specific needs and collect valuable data effortlessly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "flex h-screen w-screen items-center justify-center")}>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}
