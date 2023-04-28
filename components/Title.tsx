import React from "react"
import { HiOutlineCode } from "react-icons/hi"

type Props = {
	title: string
}

function Title({ title }: Props) {
	return (
		<h2 className='font-titleFont text-2xl font-semibold flex items-center'>
			<span className='mr-2 text-designColor'>
				<HiOutlineCode />
			</span>
			{title}
			<span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-designColor ml-6' />
		</h2>
	)
}

export default Title
