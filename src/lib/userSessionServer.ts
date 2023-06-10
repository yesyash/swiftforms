import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const useSessionServer = async () => {
	const session = await getServerSession(authOptions);
	const user = session?.user;

	return user;
};
