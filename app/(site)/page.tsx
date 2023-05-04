import Image from 'next/image'
import Link from 'next/link'
import { AiFillThunderbolt } from 'react-icons/ai'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Hero from '@/components/Hero'
import Leftside from '@/components/Leftside'
import RightSide from '@/components/Rightside'
import Title from '@/components/Title'

import { getProjects, getSkills } from '@/sanity/sanity-utils'

import profileImg from '../../public/profile.jpg'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Home = async () => {
	const skills = await getSkills()
	const projects = await getProjects()

	return (
		<main>
			<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
				<div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
					<Leftside />
				</div>
				<div className='h-[88vh] w-full mx-auto p-5 mt-14'>
					{/* Hero */}
					<Hero />
					{/* About */}
					<section
						id='about'
						className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
					>
						<Title title='Mais sobre mim' />
						<div className='flex flex-col lgl:flex-row gap-6'>
							<div className='w-full lgl:w-2/3 text-base text-slate-800 font-medium flex-col gap-4'>
								<p className='leading-loose md:leading-loose w-full text-justify text-sm md:text-base'>
									Altamente <span className='text-designColor'>ambicioso</span>,{' '}
									<span className='text-designColor'>automotivado</span>,{' '}
									<span className='text-designColor'>ótimo senso de liderança</span> e{' '}
									<span className='text-designColor'>focado</span> na área de desenvolvimento para
									desenvolver soluções que possam impactar na vida das pessoas e empresas. Eu me
									formei com bacharelado em Sistemas de Informação e pós graduado em Engenharia de
									Software. Tenho uma grande variedade de hobbies e paixões que me mantêm ocupado.
									Desde ler, praticar esportes, viajar, eu estou sempre buscando novas experiências
									para me manter envolvido e aprender coisas novas. Eu acredito que uma pessoa nunca
									deva parar de crescer e é isso que me esforço a fazer, tenho uma paixão por
									tecnologia e um desejo de sempre ir além dos limites do que é possível. Estou
									animado para ver aonde minha carreira me leva e estou sempre aberto a novas
									oportunidades.
								</p>
								<p className='py-10 text-sm md:text-base'>
									Aqui estão algumas das tecnologias que venho trabalhando e aprendendo:
								</p>
								<ul className='max-w-[500px] grid grid-cols-3 gap-2'>
									<>
										{skills.map((skill) => (
											<li
												key={skill._id}
												className='flex items-center gap-2'
											>
												<span className='text-designColor'>
													<AiFillThunderbolt />
												</span>
												<div className='text-xs md:text-base'>{skill.skill}</div>
											</li>
										))}
									</>
								</ul>
							</div>
							<div className='w-full lgl:w-1/3 h-80 relative group'>
								<div className='flex justify-center'>
									<Image
										src={profileImg}
										alt='profile picture'
										className='rounded-full w-52 h-52  drop-shadow-lg lg:w-96 lg:h-w-96 mdl:w-full mdl:h-full  object-cover hover:scale-105 transition duration-300'
									/>
								</div>
							</div>
						</div>
						<span className='hidden md:inline-flex self-center py-10'>
							<BsFillArrowDownCircleFill className='w-12 h-12 animate-bounce text-designColor mt-10' />
						</span>
					</section>

					{/* projects */}

					<section
						id='project'
						className='max-w-container mx-auto lgl:px-32 pb-24 gap-8 z-20'
					>
						<Title title='Meus Projetos' />
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 '>
							{projects.map((project) => (
								<Link
									href={`/projects/${project.slug}`}
									key={project._id}
									className='border rounded-[10px] p-1 shadow-lg hover:scale-105 transition duration-500 hover:border-designColor'
								>
									{project.image && (
										<Image
											src={project.imageThumb}
											alt={project.alt}
											width={750}
											height={300}
											className='object-cover rounded-[10px]'
										/>
									)}
									<div className='mt-3 font-extrabold text-slate-600 flex justify-center font-titleFont drop-shadow-md'>
										{project.name}
									</div>
								</Link>
							))}
						</div>
					</section>
					{/* contact */}
					<Contact />
					{/* footer */}
					<Footer />
				</div>
				<div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
					<RightSide />
				</div>
			</div>
		</main>
	)
}
export default Home

// 1h:04:20
