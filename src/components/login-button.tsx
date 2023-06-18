"use client";

import { signIn, useSession } from "next-auth/react";

import cn from "@/lib/cn";
import { LogInIcon } from "lucide-react";

const LoginButton = () => {
	const { status } = useSession();
	const isLoading = status === "loading";

	if (isLoading) {
		return <span>Loading...</span>;
	}

	return (
		<button
			className={cn(
				"flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
			)}
			onClick={() => signIn("google")}
		>
			<span>
				<LogInIcon className="h-4 w-4" />
			</span>
			<span>Login with Google</span>
		</button>
	);
};

export default LoginButton;
