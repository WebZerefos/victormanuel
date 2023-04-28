import Hero from "@/components/Hero"
import Leftside from "@/components/Leftside"
import RightSitde from "@/components/Rightside"
import { AiFillThunderbolt } from "react-icons/ai"
import { getAbout, getProjects, getSkills } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"
import Title from "@/components/Title"
import profileImg from "../../public/profile.jpg"

const Home = async () => {
	const skills = await getSkills()
	const about = await getAbout()
	const projects = await getProjects()

	return (
		<main className='w-full h-screen font-bodyFont overflow-x-hidden overflow-y-scroll'>
			<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
				<div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
					<Leftside />
				</div>
				<div className='h-[88vh] w-full mx-auto p-24'>
					{/* Hero */}
					<Hero />
					{/* About */}
					<section
						id='about'
						className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
					>
						<Title title='Sobre mim' />
						<div className='flex flex-col lgl:flex-row gap-6'>
							<div className='w-full lgl:w-2/3 text-base text-slate-800 font-medium flex-col gap-4'>
								<p className='leading-loose w-full text-justify'>
									Olá, meu nome Victor Manuel Zerefos altamente <span className='text-designColor'>ambicioso</span>,{" "}
									<span className='text-designColor'>automotivado</span> e <span className='text-designColor'>focado</span> na área de desenvolvimento
									para desenvolver soluções que possam impactar na vida das pessoas e empresas. Eu me formei na Faculdade Fortium Brasília, em 2014,
									com bacharelado em Sistemas de Informação e pós graduado em Engenharia de Software. Eu tenho uma grande variedade de hobbies e
									paixões que me mantêm ocupado. Desde ler, praticar esportes, viajar, eu estou sempre buscando novas experiências para me manter
									envolvido e aprender coisas novas. Eu acredito que uma pessoa nunca deva parar de crescer e é isso que me esforço a fazer, eu tenho
									uma paixão por tecnologia e um desejo de sempre ir além dos limites do que é possível. Estou animado para ver aonde minha carreira
									me leva e estou sempre aberto a novas oportunidades.
								</p>
								<p className='py-10'>Aqui estão algumas das tecnologias que venho trabalhando e aprendendo:</p>
								<ul className='max-w-[450px] grid grid-cols-2 gap-2'>
									<>
										{skills.map((skill) => (
											<li
												key={skill._id}
												className='flex items-center gap-2'
											>
												<span className='text-designColor'>
													<AiFillThunderbolt />
												</span>{" "}
												{skill.skill}
											</li>
										))}
									</>
								</ul>
							</div>
							<div className='w-full lgl:w-1/3 h-80 relative group'>
								<div className=''>
									<Image
										src={profileImg}
										alt='profile picture'
										className='rounded-full drop-shadow-lg h-full object-cover'
									/>
								</div>
							</div>
						</div>
					</section>
					{/* Experience */}
					{/* projects */}
					{/* contacy */}
					{/* footer */}
				</div>
				<div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
					<RightSitde />
				</div>
			</div>

			{/* About */}

			<h2 className='mt-24 font-bold text-gray-700 text-3xl'>Meus Projetos</h2>
			<div className='p-4 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-20'>
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
		</main>
	)
}
export default Home

// 23min:11
