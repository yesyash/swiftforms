"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
	return (
		<button
			className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white"
			onClick={() => signOut()}
		>
			Sign Out
		</button>
	);
};

export default SignOutButton;
