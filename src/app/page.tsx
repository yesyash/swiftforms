import prisma from "@/lib/prisma";

export default async function Home() {
	const forms = await prisma.forms.findMany();

	return (
		<main className="p-8">
			<h4 className="text-xl font-semibold">My Forms</h4>
			{forms.length > 0 ? (
				<ul>
					{forms.map((form) => (
						<li key={form.id}>{form.title}</li>
					))}
				</ul>
			) : (
				<span>No forms found</span>
			)}
		</main>
	);
}
