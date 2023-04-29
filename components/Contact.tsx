import Title from "@/components/Title"

function Contact() {
	return (
		<section
			id='contact'
			className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
		>
			<p className='font-titleFont text-lg text-designColor font-semibold flex items-center tracking-wide'>E agora?</p>
			<span className='font-titleFont text-3xl md:text-5xl font-bold'>
				<Title title='Entre em contato' />
			</span>
			<p className='max-w-[600px] text-center text-slate-500'>
				Caso tenha gostado dos meus projetos, entre em contato, pois será um prazer trabalharmos juntos!
			</p>

			<div className='flex gap-6'>
				<a href='mailto:victor.zerefos@gmail.com'>
					<button className='w-40 h-14 border border-slate-500 shadow-md mt-6 font-titleFont text-sm bg-slate-500 text-white tracking-wider rounded-md '>
						Entrar em contato
					</button>
				</a>
				<a
					href='resume.pdf'
					target='_blank'
				>
					<button className='w-40 h-14 border border-designColor shadow-md mt-6 font-titleFont text-sm bg-designColor text-white tracking-wider rounded-md '>
						Resume
					</button>
				</a>
			</div>
		</section>
	)
}

export default Contact
