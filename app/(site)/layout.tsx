import Link from "next/link"
import "../globals.css"
import Navbar from "@/components/NavBar"
export const revalidate = 60

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<header className='w-full'>
					<Navbar />
				</header>
				<div className='max-w-7xl mx-auto py-10'>
					<main className='py-20'>{children}</main>
				</div>
			</body>
		</html>
	)
}
