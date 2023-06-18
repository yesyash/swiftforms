"use client";

import { useSession } from "next-auth/react";

import { createFormAction } from "@/actions/forms";
import { TCustomSession } from "@/app/api/auth/[...nextauth]/route";
import cn from "@/lib/cn";
import { PlusCircleIcon } from "lucide-react";

const CreateFormButton = () => {
	const { status, data } = useSession();
	const isLoading = status === "loading";
	const userId = (data as TCustomSession)?.user.id;

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (!userId) {
		return null;
	}

	return (
		<button
			className={cn(
				"flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
			)}
			onClick={() => createFormAction(userId)}
		>
			<span>
				<PlusCircleIcon className="h-4 w-4" />
			</span>
			<span>Create Form</span>
		</button>
	);
};

export default CreateFormButton;
