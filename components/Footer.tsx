import { RiGithubLine } from "react-icons/ri"
import { TfiLinkedin, TfiInstagram, TfiFacebook, TfiTwitter } from "react-icons/tfi"

function Footer() {
	return (
		<div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-12 gap-4'>
			<div className='flex text-white flex-row gap-4'>
				<a
					href='https://github.com/WebZerefos'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-500 rounded-full inline-flex items-center justify-center drop-shadow-md'>
						<RiGithubLine />
					</span>
				</a>
				<a
					href='https://linkedin.com/in/victor-zerefos-aaa35297'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-500 rounded-full inline-flex items-center justify-center drop-shadow-md'>
						<TfiLinkedin />
					</span>
				</a>
				<a
					href='https://instagram.com/victorzerefos?igshid=YmMyMTA2M2Y='
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-500 rounded-full inline-flex items-center justify-center drop-shadow-md'>
						<TfiInstagram />
					</span>
				</a>
				<a
					href='https://www.facebook.com/victorzerefos?mibextid=LQQJ4d'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-500 rounded-full inline-flex items-center justify-center drop-shadow-md'>
						<TfiFacebook />
					</span>
				</a>
				<a
					href='https://twitter.com/onlyzerefos'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-500 rounded-full inline-flex items-center justify-center drop-shadow-md'>
						<TfiTwitter />
					</span>
				</a>
			</div>
		</div>
	)
}

export default Footer
