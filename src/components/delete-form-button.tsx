"use client";

import { useSession } from "next-auth/react";

import { deleteFormAction } from "@/actions/forms";
import { TCustomSession } from "@/app/api/auth/[...nextauth]/route";
import { Trash2Icon } from "lucide-react";

type TDeleteFormButtonProps = {
	formId: number;
};

const DeleteFormButton = ({ formId }: TDeleteFormButtonProps) => {
	const { status, data } = useSession();
	const isLoading = status === "loading";
	const userId = (data as TCustomSession)?.user.id;

	if (isLoading) {
		return <span className="font-gray-400 text-xs">...</span>;
	}

	if (!userId) {
		return null;
	}

	return (
		<button onClick={() => deleteFormAction(formId, userId)}>
			<Trash2Icon className="h-4 w-4 text-red-500" />
		</button>
	);
};

export default DeleteFormButton;
