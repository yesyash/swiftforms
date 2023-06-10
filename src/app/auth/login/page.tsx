"use client";

const Login = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<form action="/api/auth/signin/google" method="post" className="text-center">
				<input
					type="hidden"
					name="csrfToken"
					defaultValue="50edd1f65bbfc3c5917fb95b1596704165cfea8d83d094ecf6d1ce0b0e16469e"
				/>
				<input type="hidden" name="callbackUrl" defaultValue={process.env.NEXTAUTH_URL} />

				<button
					type="submit"
					className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white"
				>
					Login with Google
				</button>
			</form>
		</div>
	);
};

export default Login;
