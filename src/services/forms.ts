import prisma from "@/lib/prisma";

// Gets all the forms associated with a user
export const getForms = async (userId: string) => {
	const forms = await prisma.forms.findMany({
		where: {
			userId,
		},
	});

	return forms;
};

// Creates a form for a user
export const createForm = async (userId: string) => {
	await prisma.forms.create({
		data: {
			title: `Form ${Date.now()}`,
			user: {
				connect: {
					id: userId,
				},
			},
			created_at: new Date(),
			updated_at: new Date(),
		},
	});
};

// Deletes a form with given id
export const deleteForm = async (formId: number, userId: string) => {
	const form = await prisma.forms.findUnique({
		where: {
			id: formId,
		},
	});

	if (form?.userId !== userId) {
		throw new Error("Unauthorized");
	}

	await prisma.forms.delete({
		where: {
			id: formId,
		},
	});
};
