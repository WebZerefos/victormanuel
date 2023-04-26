import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

const Home = async () => {
	const projects = await getProjects()

	return (
		<div>
			<div className='text-5xl font-extrabold'>Olá meu nome é Victor.</div>
			<p className='mt-3 text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
			<h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
			<div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project._id}
						className='border rounded-lg p-1 shadow-sm hover:scale-105 transition duration-500 hover:border-orange-200'
					>
						{project.image && (
							<Image
								src={project.image}
								alt={project.alt}
								width={750}
								height={300}
								className='object-cover rounded-lg'
							/>
						)}
						<div className='mt-3 font-extrabold'>{project.name}</div>
					</Link>
				))}
			</div>
		</div>
	)
}
export default Home

// 1h:22:18
