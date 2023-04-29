import { Project } from "@/types/Project"
import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { About } from "@/types/About"
import { Skill } from "@/types/Skill"

export const getProjects = async (): Promise<Project[]> => {
	return createClient(clientConfig).fetch(
		groq`
    *[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'imageThumb': imageThumb.asset->url,
      'image': image.asset->url,
    }
    `
	)
}

export const getProject = async (slug: string): Promise<Project> => {
	return createClient(clientConfig).fetch(
		groq`
    *[_type == 'project' && slug.current == $slug ][0]{
      _id,
      _createdAt,
      name,
      platform,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content,
      'technologies': technology[]-> technology
    }`,
		{ slug }
	)
}

export const getAbout = async (): Promise<About> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'about'][0]{
      _id,
      _createdAt,
      name,
      'image': image.asset->url,
      bio
    }`
	)
}

export const getSkills = async (): Promise<Skill[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'skill']{
      _id,
      skill,
   }`
	)
}
