"use server";

import { createForm, getForms } from "@/services/forms";
import { revalidatePath } from "next/cache";

export const getFormsAction = async (userId: string) => {
	return await getForms(userId);
};

export const createFormAction = async (userId: string) => {
	await createForm(userId);
	revalidatePath("/dashboard");
};
