import { PortableTextBlock } from 'sanity'
import { Technology } from './Technology'

export type Project = {
	_id: string
	_createdAt: Date
	name: string
	platform: string
	slug: string
	imageThumb: string
	image: string
	alt: string
	gitUrl: string
	youtubeUrl: string
	technologies: []
	content: PortableTextBlock[]
}
