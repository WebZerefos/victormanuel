function Hero() {
	return (
		<section
			id='home'
			className='px-10'
		>
			<h2 className='text-3xl text-slate-500 font-bodyFont tracking-wide text-designColor mt-10'>Olá, meu nome é</h2>
			<h1 className='text-2xl text-slate-700 md:text-5xl lg:text-6xl font-bodyFont font-bold flex flex-col md:mt-5'>
				Victor Zerefos. <span>Desenvolvedor Mobile & Web.</span>
			</h1>
			<p className='flex text-sm font-titleFont font-extralight md:max-w-[650px] mt-[-10px] italic tracking-wide md:mt-3'>
				&ldquo;Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.&ldquo;
			</p>
		</section>
	)
}

export default Hero
