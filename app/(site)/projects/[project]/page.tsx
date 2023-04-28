import { getProject } from "@/sanity/sanity-utils"
import React from "react"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
	params: { project: string }
}

const Project = async ({ params }: Props) => {
	const slug = params.project
	const project = await getProject(slug)

	return (
		<div className='flex flex-col lgl:flex-row gap-6 p-20 mt-20'>
			<div className='w-full lgl:w-2/3 text-base text-slate-800 font-medium flex-col gap-4'>
				<header className='flex justify-between items-center '>
					<h1 className='text-4xl font-bold drop-shadow bg-gradient-to-r  from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent '>
						{project.name}
					</h1>
					<a
						href={project.url}
						title='veja o projeto'
						target='_blank'
						rel='noopener noreferrer'
						className='bg-slate-100 rounded-lg py-3 px-4 whitespace-nowrap text-slate-500 font-bold hover:scale-105 transition duration-300'
					>
						veja o projeto
					</a>
				</header>
				<div className='w-full lgl:w-1/3 h-80 relative group'>
					<div className=''>
						<Image
							src={project.image}
							alt={project.alt}
							width={1920}
							height={1080}
							className='mt-10 border-2 border-slate-300 object-cover rounded-xl'
						/>
					</div>
					<p className='leading-loose w-full text-justify'>
						<div className='text-lg text-slate-500 mt-5'>
							<PortableText value={project.content} />
						</div>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Project

{
	/* <div className='max-w-container mx-auto lgl:px-20 py-24 mt-20'> */
}

{
	/* content goes here */
}

{
	/* image goes here */
}

// </div>
