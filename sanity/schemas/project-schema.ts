const project = {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'platform',
			title: 'Platform',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name' },
		},
		{
			name: 'imageThumb',
			title: 'ImageThumb',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
		{
			name: 'gitUrl',
			title: 'GitUrl',
			type: 'url',
		},
		{
			name: 'youtubeUrl',
			title: 'YoutubeUrl',
			type: 'url',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'technology',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'technology' } }],
		},
	],
}

export default project
