import AuthButton from "@/components/auth-button";
import { useSessionServer } from "@/lib/userSessionServer";

export default async function Home() {
	// access session in server components using a custom function: useSessionServer()
	const user = await useSessionServer();

	return (
		<main className="text-center">
			<h4 className="mb-4 text-xl font-semibold">Homepage</h4>
			<h5 className="mb-6">{user?.name}</h5>

			<AuthButton />
		</main>
	);
}
