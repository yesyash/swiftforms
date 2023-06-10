"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import cn from "@/lib/cn";

const AuthButton = () => {
	// access session in client components using useSession
	const { status } = useSession();
	const isLoading = status === "loading";
	const isLoggedIn = status === "authenticated";

	if (isLoading) {
		return <span>Loading...</span>;
	}

	return (
		<button
			className={cn(
				"rounded-lg px-4 py-2 text-sm font-medium text-white",
				isLoggedIn ? "bg-red-600" : "bg-blue-600"
			)}
			onClick={isLoggedIn ? () => signOut() : () => signIn("google")}
		>
			{isLoggedIn ? "Sign Out" : "Sign In"}
		</button>
	);
};

export default AuthButton;
