import Link from "next/link";

export default async function Home() {
	return (
		<main className="text-center">
			<Link href="/auth/login" className="mb-2 block font-medium text-blue-500">
				Login
			</Link>
			<Link href="/dashboard" className="mb-2 block font-medium text-blue-500">
				Dashboard
			</Link>
		</main>
	);
}
