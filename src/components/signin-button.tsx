"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
	return (
		<button
			className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"
			onClick={() => signIn()}
		>
			Sign In
		</button>
	);
};

export default SignInButton;
