"use client";

import { SessionProvider } from "next-auth/react";

type TNextAuthProviderProps = {
	children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: TNextAuthProviderProps) => {
	return <SessionProvider>{children}</SessionProvider>;
};
