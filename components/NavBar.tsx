"use client"
import Image from "next/image"
import logoImg from "../public/logo.jpg"

import Link from "next/link"
import React, { useRef, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { RiGithubLine } from "react-icons/ri"
import { TfiLinkedin, TfiInstagram, TfiFacebook, TfiTwitter } from "react-icons/tfi"

function Navbar() {
	const ref = useRef<string | any>("")
	const [showMenu, setShowMenu] = useState(false)

	const onClickScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
		const href = e.currentTarget.href
		const targetId = href.replace(/.*\#/, "")
		const elem = document.getElementById(targetId)
		elem?.scrollIntoView({
			behavior: "smooth",
		})

		//update the class name of the click target
		const links = document.querySelectorAll(".nav-link")
		links.forEach((link) => {
			link.classList.remove("active")
		})
		e.currentTarget.classList.add("active")
	}

	const handleClick = () => {}

	return (
		<section className='bg-slate-50 w-full h-20 lg:h-[8vh] fixed top-0 z-50 px-4 drop-shadow-lg'>
			<div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
				<Link href={"/"}>
					<Image
						src={logoImg}
						alt='logo'
						className='w-14 md:w-20 rounded-full drop-shadow-md '
					/>
				</Link>
				<div className='hidden md:inline-flex items-center gap-12 '>
					<ul className='flex gap-12 text-md'>
						<Link
							href={"#home"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link hover:scale-105 transition '
						>
							<li>Home</li>
						</Link>

						<Link
							href={"#about"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link hover:scale-105 transition '
						>
							<li>Sobre</li>
						</Link>

						<Link
							href={"#project"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link hover:scale-105 transition '
						>
							<li>Projetos</li>
						</Link>
						<Link
							href={"#contact"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link hover:scale-105 transition '
						>
							<li>Contato</li>
						</Link>
					</ul>
				</div>
				{/* hamburger icon  */}
				<div
					onClick={() => setShowMenu(true)}
					className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-designColor cursor-pointer overflow-hidden group'
				>
					<span className='w-full h-[2px] bg-slate-500 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
					<span className='w-full h-[2px] bg-slate-500 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
					<span className='w-full h-[2px] bg-slate-500 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
				</div>

				{/* SIDE MENU */}

				{showMenu && (
					<div
						onClick={() => setShowMenu(false)}
						ref={(node) => (ref.current = node)}
						className='absolute lg:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
					>
						<div className='w-[80%] h-full overflow-y-scroll scrollbarhide bg-white flex flex-col items-center px-4 py-10 relative'>
							<AiOutlineCloseCircle
								onClick={() => setShowMenu(false)}
								className='absolute text-4xl text-designColor cursor-pointer'
							/>
							<div className='flex flex-col items-center gap-12 mt-20'>
								<ul className='flex flex-col text-base gap-12'>
									<Link
										href={"#home"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<li>Home</li>
									</Link>
									<Link
										href={"#about"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<li>Sobre</li>
									</Link>

									<Link
										href={"#project"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<li>Projetos</li>
									</Link>
									<Link
										href={"#contact"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-slate-500 hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<li>Contato</li>
									</Link>
								</ul>
								<div className='flex gap-2 text-white'>
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
								<div className='self-center items-center justify-center -mt-6 '>
									<a href='mailto:victor.zerefos@gmail.com'>
										<p className='text-md tracking-wide text-slate-500'>victor.zerefos@gmail.com</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Navbar
