function Hero() {
	return (
		<section
			id='home'
			className='md:max-w-contentContainer mx-auto py-12 mdl:py-40  flex flex-col gap-2 lgl:gap-8 mdl:px-10 xl:px-4'
		>
			<h3 className='text-lg font-titleFont tracking-wide text-slate-600'>Olá, meu nome é</h3>
			<h1 className='bg-gradient-to-r from-slate-500 via-designColor to-slate-700 bg-clip-text text-transparent text-2xl md:text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>
				Victor Zerefos. <span>Desenvolvedor Mobile & Web.</span>
			</h1>
			<p className='flex text-sm font-extralight md:max-w-[650px] italic tracking-wide '>
				&ldquo;Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.&ldquo;
			</p>
		</section>
	)
}

export default Hero
