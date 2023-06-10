import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error(
		"Client ID and secret are not provided for Google Provider. Add them to your .env file"
	);
}

export type TCustomSession = Session & { user: { id: string | undefined } };
export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async session({ session, token }: { session: Session; token: JWT }) {
			const customSession = session as TCustomSession;

			if (customSession?.user) {
				customSession.user.id = token.sub;
			}

			return customSession;
		},
	},
	session: {
		strategy: "jwt" as const,
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
