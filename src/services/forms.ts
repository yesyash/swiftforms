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
			title: "Form 2",
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
