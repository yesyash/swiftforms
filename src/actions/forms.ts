"use server";

import { createForm, getForms } from "@/services/forms";

export const getFormsAction = async (userId: string) => {
	return await getForms(userId);
};

export const createFormAction = async (userId: string) => {
	return await createForm(userId);
};
