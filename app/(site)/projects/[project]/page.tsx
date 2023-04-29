import { getProject } from "@/sanity/sanity-utils"
import React from "react"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Title from "@/components/Title"
import { RiGithubLine } from "react-icons/ri"

type Props = {
	params: { project: string }
}

const Project = async ({ params }: Props) => {
	const slug = params.project
	const project = await getProject(slug)

	return (
		<div className='max-w-container mx-auto lgl:px-40 py-40'>
			<div className='px-4'>
				<Title title={project.platform} />
			</div>
			<div className='w-full flex flex-col items-center justify-center gap-28 mt-10 px-4'>
				<div className='flex flex-col xl:flex-row gap-6'>
					<div className='w-full xl:w-1/2 h-auto relative group'>
						<Image
							src={project.image}
							alt={project.alt}
							width={1440}
							height={300}
							className='shadow-lg rounded-lg'
						/>
					</div>
					<div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
						<p className='font-titleFont text-designColor text-sm tracking-wide'>Featured Project</p>
						<h3 className='text-2xl font-bold'>{project.name}</h3>
						<p className='bg-slate-500 drop-shadow-lg text-sm md:text-base p-2 md:p-6 rounded-md text-slate-200 text-justify'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iure laboriosam architecto in repellendus impedit inventore, vitae
							reprehenderit unde esse soluta sint quia! Blanditiis deleniti sint laboriosam exercitationem magni odit.
						</p>
						<ul className='text-xs md:text-sm font-titleFont font-semibold tracking-wide flex gap-2 md:gap-3 justify-between text-slate-500'>
							{/* {project.technologies.map((tech, i) => (
								<li key={i}>{tech}</li>
							))} */}
						</ul>
						<div className='text-2xl flex gap-4 text-white'>
							<a
								href='https://github.com/WebZerefos'
								className='hover:scale-125 transition duration-300'
							>
								<span className='w-10 h-10 text-xl bg-slate-500 rounded-full inline-flex items-center justify-center drop-shadow-md'>
									<RiGithubLine />
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Project
