import { getServerSession } from "next-auth";

import AuthButton from "@/components/auth-button";

import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
	// access session in server components using getServerSession
	const session = await getServerSession(authOptions);
	const user = session?.user;

	return (
		<main className="text-center">
			<h4 className="mb-4 text-xl font-semibold">Homepage</h4>
			<h5 className="mb-6">{user?.name}</h5>

			<AuthButton />
		</main>
	);
}
