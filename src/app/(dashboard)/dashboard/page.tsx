import CreateFormButton from "@/components/create-form-button";
import DeleteFormButton from "@/components/delete-form-button";
import { useSessionServer } from "@/lib/userSessionServer";
import { getForms } from "@/services/forms";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Dashboard",
};

const DashboardPage = async () => {
	const user = await useSessionServer();
	if (!user?.id) {
		redirect("/auth/login");
	}

	const forms = await getForms(user?.id);

	return (
		<div>
			<div className="flex w-full items-center justify-end">
				<CreateFormButton />
			</div>

			<div>
				<h2 className="mb-4 text-lg font-semibold text-zinc-900">Recent Forms</h2>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
					{forms.length > 0 ? (
						forms.map((form) => (
							<div
								key={form.id}
								className="flex items-center justify-between rounded-lg border border-zinc-300 p-4"
							>
								<h3 className="font-medium">{form.title}</h3>
								<DeleteFormButton formId={form.id} />
							</div>
						))
					) : (
						<span>No forms found</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
