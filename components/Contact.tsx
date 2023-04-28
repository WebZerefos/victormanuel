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

			<a href='mailto:victor.zerefos@gmail.com'>
				<button className='w-40 h-14 border border-designColor mt-6 font-titleFont text-sm text-designColor tracking-wider rounded-md '>
					Entrar em contato
				</button>
			</a>
		</section>
	)
}

export default Contact
