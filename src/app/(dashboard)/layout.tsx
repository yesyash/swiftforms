import DashboardNavigation from "@/components/dashboard-navigation";
import { NextAuthProvider } from "@/providers/next-auth-provider";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | Swiftforms",
		default: "Swiftforms",
	},
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DashboardNavigation />

				<main className="py-10 lg:pl-72">
					<div className="px-4 sm:px-6 lg:px-8">
						<NextAuthProvider>{children}</NextAuthProvider>
					</div>
				</main>
			</body>
		</html>
	);
}

export default DashboardLayout;
