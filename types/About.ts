import { PortableTextBlock } from "sanity"

export type About = {
	_id: string
	_createdAt: Date
	name: string
	slug: string
	image: string
	bio: PortableTextBlock[]
}
