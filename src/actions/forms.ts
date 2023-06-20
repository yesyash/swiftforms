"use server";

import { createForm, deleteForm, getForms } from "@/services/forms";
import { revalidatePath } from "next/cache";

export const getFormsAction = async (userId: string) => {
	return await getForms(userId);
};

export const createFormAction = async (userId: string) => {
	await createForm(userId);
	revalidatePath("/dashboard");
};

export const deleteFormAction = async (formId: number, userId: string) => {
	await deleteForm(formId, userId);
	revalidatePath("/dashboard");
};
