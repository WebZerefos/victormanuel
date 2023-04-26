import Link from "next/link"
import "../globals.css"

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='max-w-3xl mx-auto py-10'>
				<header>
					<Link
						href={"/"}
						className='text-lg font-bold'
					>
						Home
					</Link>
				</header>
				<main className='py-20'>{children}</main>
			</body>
		</html>
	)
}